import React from 'react';

import Image from 'next/image';

import { formattedCurrency } from '@utils/formatCurrency';

import { Container } from './styles';

type ProductProps = {
  name: string;
  price: number;
  description: string;
  image: string;
};

export const Product = ({ name, price, description, image }: ProductProps) => (
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
      <button type='button'>Buy now</button>
    </div>
  </Container>
);
