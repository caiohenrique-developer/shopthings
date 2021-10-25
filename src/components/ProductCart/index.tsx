import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import Image from 'next/image';

import { productCartManager } from '@store/actions/productCartManager';

import CloseIconSVG from '@assets/close-icon.svg';

import { formattedCurrency } from '@utils/formatCurrency';

import { Container } from './styles';
import { ProductCartProps } from './types';

export const ProductCart = ({
  productID,
  name,
  price,
  image,
}: ProductCartProps) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleQuantity = (buttonID: string) => {
    if (quantity > 0 && buttonID === 'increase') {
      setQuantity(quantity + 1);
    } else if (quantity > 1 && buttonID === 'decrease') {
      setQuantity(quantity - 1);
    }
  };

  const removeProduct = {
    productID,
    name,
    price,
    image,
    selected: false,
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
        <span>{formattedCurrency(price, 'USD')}</span>
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

      <button
        type='button'
        onClick={() => dispatch(productCartManager(removeProduct))}
      >
        <CloseIconSVG />
      </button>
    </Container>
  );
};
