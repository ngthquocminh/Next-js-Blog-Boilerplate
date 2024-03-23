import type { NextApiRequest, NextApiResponse } from 'next';

import { verifyJwtToken } from '../../admin/auth';
import { getAllPosts } from '../../utils/Content';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const { cookies } = req;
      const token = cookies.token ?? null;
      const hasVerifiedToken = token && (await verifyJwtToken(token));
      if (hasVerifiedToken) {
        const posts = getAllPosts(
          ['slug', 'title', 'date', 'modified_date', 'status'],
          false
        );
        res.status(200).json({ success: true, data: posts });
      } else res.status(403).send({ error: 'Unauthorized' });
    } else res.status(500).send({ error: 'Unsuported method' });
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' });
  }
}
