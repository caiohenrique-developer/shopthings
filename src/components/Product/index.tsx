import React from 'react';
import { useDispatch } from 'react-redux';

import Image from 'next/image';

import { productCartManager } from '@store/actions/productCartManager';

import { formattedCurrency } from '@utils/formatCurrency';

import { Container } from './styles';

type ProductProps = {
  productID: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export const Product = ({
  productID,
  name,
  price,
  description,
  image,
}: ProductProps) => {
  const dispatch = useDispatch();

  const addProduct = { productID, name, price, image, selected: true };

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
        <span>{formattedCurrency(price)}</span>
        <h2>{name}</h2>
        <p>{description}</p>
        <button
          type='button'
          onClick={() => dispatch(productCartManager(addProduct))}
        >
          Buy now
        </button>
      </div>
    </Container>
  );
};
