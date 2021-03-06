import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import Image from 'next/image';

import {
  productCartManager,
  productCartQuantityAction,
} from '@store/actions/productCartManager';
import { productCartManagerSelector } from '@store/selectors/productCartManager';

import { Container } from '@components/ProductCart/styles';
import { ProductCartProps } from '@components/ProductCart/types';

import CloseIconSVG from '@assets/close-icon.svg';

import { formattedCurrency } from '@utils/formatCurrency';

export const ProductCart = ({
  productID,
  name,
  price,
  image,
  quantity,
}: ProductCartProps) => {
  const [stock, setStock] = useState(0);

  const productList = useSelector(productCartManagerSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    productList.forEach(
      ({ stock: productStock, productID: ID }) =>
        ID && ID === productID && setStock(productStock),
    );
  }, [productList, productID]);

  const handleQuantity = (buttonID: string) => {
    if (quantity > 0 && buttonID === 'increase') {
      dispatch(productCartQuantityAction(productID, quantity + 1));
    } else if (quantity > 1 && buttonID === 'decrease') {
      dispatch(productCartQuantityAction(productID, quantity - 1));
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
          <input type='number' maxLength={2} value={quantity} disabled />
          <button
            type='button'
            disabled={quantity === stock}
            onClick={() => handleQuantity('increase')}
          >
            <BsChevronCompactRight />
          </button>
        </div>
      </div>

      <button
        type='button'
        onClick={() => dispatch(productCartManager(productID))}
      >
        <CloseIconSVG />
      </button>
    </Container>
  );
};
