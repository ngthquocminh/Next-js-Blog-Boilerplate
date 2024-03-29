import fs from 'fs';
import path, { join } from 'path';

import ImageKit from 'imagekit';
import { NextApiRequest, NextApiResponse } from 'next';

import { verifyJwtToken } from '../../admin/auth';
import { imageKitExtract } from '../../utils/Common';
import { getPostBySlug } from '../../utils/Content';

const BLOG_DIRECTORY = path.join(process.cwd(), '_data/posts');

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { cookies } = req;
    const token = cookies.token ?? null;
    const hasVerifiedToken = token && (await verifyJwtToken(token));
    // console.log('handler');

    if (!hasVerifiedToken) {
      res.status(403).send({ error: 'Unauthorized' });
      return;
    }
    const { slug } = JSON.parse(req.body);
    const post = getPostBySlug(slug, ['image'], false);
    if (post) {
      try {
        fs.rmSync(join(BLOG_DIRECTORY, `${slug}.md`));
        // console.log('delete file compelte');
      } catch (e) {
        console.log(e);
        res.status(400).json({ error: 'Failed' });
        return;
      }
      try {
        const imageId = imageKitExtract(post.image).id ?? '';
        imageKit.deleteFile(imageId);
      } catch (e) {
        console.log(e);
      }
      res.status(200).json({ message: 'OK' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};

export default handler;
