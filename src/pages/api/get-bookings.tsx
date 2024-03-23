import fs from 'fs';
import { join } from 'path';

import type { NextApiRequest, NextApiResponse } from 'next';

import { verifyJwtToken } from '../../admin/auth';

export interface IBookingItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  resolved: boolean;
}

const loadBooking = (file: string): IBookingItem | null => {
  const fullPath = join('_data/booking/', `${file}`);
  try {
    const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    data.id = file;
    return data;
  } catch (err) {
    return null;
  }
};

const getAllBookings = () => {
  const files = fs.readdirSync('_data/booking/');
  return files.map((f) => loadBooking(f)).filter((b) => b != null);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const { cookies } = req;
      const token = cookies.token ?? null;
      const hasVerifiedToken = token && (await verifyJwtToken(token));
      // console.log("hasVerifiedToken",hasVerifiedToken);
      if (hasVerifiedToken) {
        const bookings = getAllBookings();
        // console.log(bookings);
        res.status(200).json({ success: true, data: bookings });
      } else res.status(403).send({ error: 'Unauthorized' });
    } else res.status(500).send({ error: 'Unsuported method' });
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' });
  }
}
