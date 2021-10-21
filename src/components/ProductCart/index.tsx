import React from 'react';

import Image from 'next/image';

import { Container } from './styles';

type ProductCartProps = {
  name: string;
  price: number;
  image: string;
};

export const ProductCart = ({ name, price, image }: ProductCartProps) => {
  return (
    <Container>
      <div>
        <Image
          src={image}
          alt={name}
          width={140}
          height={200}
          objectFit='contain'
        />
      </div>

      <div>
        <span>$ {price}</span>
        <h2>{name}</h2>
        <button type='button'>Buy now</button>
      </div>
    </Container>
  );
};
