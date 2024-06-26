import { SignJWT } from 'jose';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getJwtSecretKey } from '../../admin/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = JSON.parse(req.body);
  try {
    if (req.method === 'POST') {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      if (username === 'admin' && password === process.env.ADMIN_PASSWORD) {
        const token = await new SignJWT({
          username,
        })
          .setProtectedHeader({ alg: 'HS256' })
          .setIssuedAt()
          .setExpirationTime('4h')
          .sign(getJwtSecretKey());

        // const response = NextResponse.json(
        //   { success: true },
        //   { status: 200, headers: { "content-type": "application/json" } }
        // );
        // response.cookies.set("token",token)
        res.status(200).json({ success: true, token });
      } else res.status(500).send({ error: 'Incorrect' });
    } else res.status(500).send({ error: 'Unsuported method' });
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' });
  }
}
