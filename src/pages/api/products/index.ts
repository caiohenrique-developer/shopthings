import type { NextApiRequest, NextApiResponse } from 'next';

import { fakeStoreApi } from '@services/api';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const { data: products } = await fakeStoreApi.get('products');

    return res.status(200).json(products);
  } catch (err) {
    throw new Error(err);
  }
};
