import fs from 'fs';
import { join } from 'path';

import type { NextApiRequest, NextApiResponse } from 'next';

import { stringToSlug } from '../../utils/Common';

const bookingsDirectory = join(process.cwd(), '_data/booking');

const handleFormInputAsync = async (
  name: string,
  phone: string,
  email: string
) => {
  // const files = fs.readdirSync(postsDirectory);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const dateStr = new Date().toISOString();
  const createdFile = `${stringToSlug(`${name}-${phone}-${dateStr}`)}.json`;
  fs.writeFileSync(
    join(bookingsDirectory, createdFile),
    JSON.stringify({ name, phone, email })
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, phone, email } = JSON.parse(req.body);
  try {
    if (req.method === 'POST') {
      await handleFormInputAsync(name, phone, email);
      res.status(200).json({ result: 'complete' });
    } else res.status(500).send({ error: 'Unsuported method' });
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' });
  }
}
