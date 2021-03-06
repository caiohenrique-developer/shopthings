import React from 'react';
import { useDispatch } from 'react-redux';

import Image from 'next/image';

import { productCartManager } from '@store/actions/productCartManager';

import { Container } from '@components/Product/styles';
import { ProductProps } from '@components/Product/types';

import { formattedCurrency } from '@utils/formatCurrency';

export const Product = ({
  productID,
  name,
  price,
  image,
  stock,
  category,
  description,
}: ProductProps) => {
  const dispatch = useDispatch();

  const addProduct = {
    productID,
    name,
    price,
    image,
    stock,
    category,
    description,
    quantity: 1,
  };

  return (
    <Container>
      <div>
        <Image
          src={image}
          alt={name}
          width={178}
          height={248}
          objectFit='contain'
        />
      </div>

      <div>
        <span>{formattedCurrency(price, 'USD')}</span>
        <h2>{name}</h2>
        <p>{description}</p>
        <button
          type='button'
          data-tst='add-to-cart-btn'
          onClick={() => dispatch(productCartManager(addProduct))}
        >
          Buy now
        </button>
      </div>
    </Container>
  );
};
