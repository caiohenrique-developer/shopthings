import React from 'react';

import Image from 'next/image';

import CloseIconSVG from '@assets/close-icon.svg';

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
      </div>

      <button type='button'>
        <CloseIconSVG />
      </button>
    </Container>
  );
};
