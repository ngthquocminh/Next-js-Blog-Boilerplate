import fs from 'fs';
import path, { join } from 'path';

import formidable, { IncomingForm } from 'formidable';
import ImageKit from 'imagekit';
import { NextApiRequest, NextApiResponse } from 'next';
import slugify from 'slugify';

import { cvt2RelativePath, imageKitCombine } from '../../utils/Common';
import { getPostBySlug } from '../../utils/Content';

const BLOG_DIRECTORY = path.join(process.cwd(), '_data/posts');
const BLOG_IMAGE_DIRECTORY = path.join(process.cwd(), '_data/temp');

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const saveImage = async (imageFile: formidable.File) => {
  try {
    const buffer = fs.readFileSync(imageFile.filepath);
    const response = await imageKit.upload({
      file: buffer,
      fileName: imageFile.originalFilename ?? imageFile.newFilename,
    });
    const str = imageKitCombine(
      response.fileId,
      `${process.env.IMAGEKIT_URL_ENDPOINT}${response.filePath}`
    );
    fs.rmSync(imageFile.filepath);
    return str;
  } catch {
    return null;
  }
};
function createPost(
  fields: formidable.Fields<string>,
  preSlug: string,
  thumbnailPath: string
) {
  const title = fields.title ? fields.title[0] : '';
  const description = fields.description ? fields.description[0] : '';
  const content = fields.content ? fields.content[0] : '';
  const status = fields.status ? fields.status[0] : '0';

  const dateStr = new Date().toLocaleDateString('vi-VN');
  const date = dateStr;
  const modifiedDate = date;
  const fullSlug = `${preSlug}-${slugify(`${dateStr}`)}`;
  const createdFile = `${fullSlug}.md`;

  const fullBlogData = `---
title: ${title}
description: ${description}
date: ${date}
modified_date: ${modifiedDate}
image: ${thumbnailPath}
status: ${status}
---

  ${content}`;

  fs.writeFileSync(join(BLOG_DIRECTORY, createdFile), fullBlogData);

  return fullSlug;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const form = new IncomingForm({
      uploadDir: BLOG_IMAGE_DIRECTORY,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        res.status(500).json({ error: 'Error uploading file' });
        return;
      }
      // console.log(fields);
      const imageFile = Array.isArray(files?.image)
        ? files.image[0]
        : files?.image;
      const post = getPostBySlug(fields.slug ? fields.slug[0] : '');
      if (!post) {
        // console.log(post);
        const title = fields.title ? fields.title[0] : '';
        const preSlug = slugify(title, {
          strict: true,
          lower: true,
          trim: true,
          locale: 'vi',
        });
        const isValidSlug = preSlug.length >= 16;
        if (!isValidSlug) {
          res.status(400).json({ error: 'Unacceptable' });
          return;
        }

        const imagePath = imageFile ? (await saveImage(imageFile)) ?? '' : '';
        const relativePath = cvt2RelativePath(imagePath);
        const fullSlug = createPost(fields, preSlug, relativePath);

        if (fullSlug.length > preSlug.length) {
          res.status(200).json({ message: 'OK', slug: fullSlug });
          return;
        }
        res.status(400).json({ error: 'Unacceptable' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};

export default handler;
