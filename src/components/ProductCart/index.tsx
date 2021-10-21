import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import Image from 'next/image';

import CloseIconSVG from '@assets/close-icon.svg';

import { Container } from './styles';

type ProductCartProps = {
  name: string;
  price: number;
  image: string;
};

export const ProductCart = ({ name, price, image }: ProductCartProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (buttonID: string) => {
    if (quantity > 0 && buttonID === 'increase') {
      setQuantity(quantity + 1);
    } else if (quantity > 1 && buttonID === 'decrease') {
      setQuantity(quantity - 1);
    }
  };

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
        <div>
          <button
            type='button'
            disabled={quantity === 1}
            onClick={() => handleQuantity('decrease')}
          >
            <BsChevronCompactLeft />
          </button>
          <input type='number' maxLength={2} value={quantity} />
          <button type='button' onClick={() => handleQuantity('increase')}>
            <BsChevronCompactRight />
          </button>
        </div>
      </div>

      <button type='button'>
        <CloseIconSVG />
      </button>
    </Container>
  );
};
