import React from 'react';

import Image from 'next/image';

import { Container } from './styles';

type ProductProps = {
  name: string;
  price: number;
  description: string;
  image: string;
};

export const Product = ({ name, price, description, image }: ProductProps) => {
  return (
    <Container>
      <div>
        <Image
          src={image}
          alt='Product'
          width={178}
          height={248}
          objectFit='cover'
        />
      </div>

      <div>
        <span>$ {price}</span>
        <h2>{name}</h2>
        <p>{description}</p>
        <button type='button'>Buy now</button>
      </div>
    </Container>
  );
};
