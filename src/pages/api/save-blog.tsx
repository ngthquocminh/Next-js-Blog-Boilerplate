import fs from 'fs';
import path, { join } from 'path';

import formidable, { IncomingForm } from 'formidable';
import ImageKit from 'imagekit';
import { NextApiRequest, NextApiResponse } from 'next';

import { verifyJwtToken } from '../../admin/auth';
import { imageKitCombine, imageKitExtract } from '../../utils/Common';
import { getPostBySlug, PostItems } from '../../utils/Content';

const BLOG_DIRECTORY = path.join(process.cwd(), '_data/posts');
const BLOG_IMAGE_DIRECTORY = path.join(process.cwd(), '_data/temp');

export const config = {
  api: {
    bodyParser: false,
  },
};

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

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

const changeImage = async (
  imageFile: formidable.File,
  oldImage: {
    id: string;
    url: string;
  }
) => {
  const newFileStr = await saveImage(imageFile);
  if (newFileStr != null) {
    console.log('delete', oldImage.id);
    imageKit.deleteFile(oldImage.id);
    return newFileStr;
  }
  return imageKitCombine(oldImage.id, oldImage.url);
};

function savePost(
  slug: string,
  fields: formidable.Fields<string>,
  post: PostItems,
  imageStr: string
) {
  const title = fields.title ? fields.title[0] : post.title;
  const description = fields.description
    ? fields.description[0]
    : post.description;
  const content = fields.content ? fields.content[0] : post.content;
  const status = fields.status ? fields.status[0] : post.status;
  const { date } = post;
  const modifiedDate = new Date().toLocaleDateString('vi-VN');

  const fullBlogData = `---
title: ${title}
description: ${description}
date: ${date}
modified_date: ${modifiedDate}
image: ${imageStr}
status: ${status}
---
${content}`;

  fs.writeFileSync(join(BLOG_DIRECTORY, `${slug}.md`), fullBlogData);

  return true;
}

const postFieldsGet = [
  'title',
  'description',
  'date',
  'modified_date',
  'image',
  'content',
  'status',
  'slug',
];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { cookies } = req;
    const token = cookies.token ?? null;
    const hasVerifiedToken = token && (await verifyJwtToken(token));
    if (!hasVerifiedToken) {
      res.status(403).send({ error: 'Unauthorized' });
      return;
    }

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
      // console.log(fields)
      const imageFile = Array.isArray(files?.image)
        ? files.image[0]
        : files?.image;
      const slug = fields.slug ? fields.slug[0] : '';

      const post = getPostBySlug(slug, postFieldsGet, false);

      if (!post) {
        res.status(400).json({ error: 'Unacceptable' });
        return;
      }
      const oldImage = imageKitExtract(post.image);
      const imageStr = imageFile
        ? await changeImage(imageFile, oldImage)
        : post.image;
      // const relativePath = cvt2RelativePath(imagePath);
      const status = savePost(slug, fields, post, imageStr);
      if (status) {
        res.status(200).json({ message: 'OK' });
        return;
      }
      res.status(400).json({ error: 'Unacceptable' });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};

export default handler;
