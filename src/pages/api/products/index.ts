import { useDispatch } from 'react-redux';

import type { NextApiRequest, NextApiResponse } from 'next';

import { fakeStoreApi } from '@services/api';

import { productCartManager } from '@store/actions/productCartManager';

type FetchProductProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    count: number;
  };
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const { data: products } = await fakeStoreApi.get('products');

    // const dispatch = useDispatch();

    // products.forEach(
    //   ({
    //     id: productID,
    //     title: name,
    //     price,
    //     image,
    //     category,
    //     description,
    //     rating,
    //   }) => {
    //     const product = {
    //       productID,
    //       name,
    //       price,
    //       image,
    //       category,
    //       description,
    //       rating,
    //       quantity: 1,
    //     };

    //     // dispatch(productCartManager(product));
    // console.log(product);
    //   },
    // );

    return res.status(200).json(products);
  } catch (err) {
    throw new Error(err);
  }
};
