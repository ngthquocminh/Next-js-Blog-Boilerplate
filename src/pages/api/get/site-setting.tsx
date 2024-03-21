import type { NextApiRequest, NextApiResponse } from 'next'
import { join } from 'path';
import fs from 'fs';
import { verifyJwtToken } from '../../../admin/auth';

const settingFile = join(process.cwd(), '_data/config.json');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method==='GET')
    {
        const cookies = req.cookies
        const token = cookies.token ?? null;
        const hasVerifiedToken = token && (await verifyJwtToken(token));
        if (hasVerifiedToken) 
        {
          const configData = fs.readFileSync(settingFile, 'utf8');
          const cfgDict = JSON.parse(configData);
          res.status(200).json({ success: true, data: cfgDict})
        }
    }
    else res.status(500).send({ error: 'Unsuported method' })
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' })
  }
}
