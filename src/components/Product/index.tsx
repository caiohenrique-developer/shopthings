import React from 'react';

import Image from 'next/image';

import { Container } from './styles';

export const Product = () => {
  return (
    <Container>
      <div>
        <Image
          src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
          alt='Product'
          width={178}
          height={248}
          objectFit='cover'
        />
      </div>

      <div>
        <span>$ 99.99</span>
        <h2>Arck armchair, pink</h2>
        <p>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <button type='button'>Buy now</button>
      </div>
    </Container>
  );
};
