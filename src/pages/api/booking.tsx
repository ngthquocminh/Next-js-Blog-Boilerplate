import fs from 'fs';
import { join } from 'path';

import type { NextApiRequest, NextApiResponse } from 'next';
import slugify from 'slugify';

const bookingsDirectory = join(process.cwd(), '_data/booking');

const handleFormInputAsync = async (
  name: string,
  phone: string,
  email: string
) => {
  // const files = fs.readdirSync(postsDirectory);
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  try {
    const today = new Date();
    const dateStr = today.toLocaleDateString('vi-VN');
    const createdFile = `${slugify(name)}_${slugify(phone, {
      strict: true,
    })}_${slugify(dateStr)}.json`;
    console.log('createdFile', createdFile);
    fs.writeFileSync(
      join(bookingsDirectory, createdFile),
      JSON.stringify({ name, phone, email, date: dateStr })
    );
    return true;
  } catch (error) {
    return false;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, phone, email } = JSON.parse(req.body);
  try {
    if (req.method === 'POST') {
      const ok = await handleFormInputAsync(name, phone, email);
      if (ok) res.status(200).json({ result: 'Complete' });
      else res.status(500).json({ result: 'Failed' });
    } else res.status(500).send({ error: 'Unsuported method' });
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' });
  }
}
