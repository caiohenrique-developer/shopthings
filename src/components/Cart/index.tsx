import React from 'react';

import { Player } from '@lottiefiles/react-lottie-player';

import { ProductCart } from '@components/ProductCart';

import { useCartOpen } from '@hooks/useCartOpen';

import CloseIconSVG from '@assets/close-icon.svg';

import { Container } from './styles';

export const Cart = () => {
  const { setCartOpen } = useCartOpen();

  const tst = true;

  return (
    <Container className='animate__animated animate__fadeInRightBig'>
      <div>
        <header>
          <button type='button' onClick={() => setCartOpen(false)}>
            <CloseIconSVG />
          </button>

          {tst && (
            <span>
              Total items: <strong>8</strong>
            </span>
          )}
        </header>

        <div>
          {!tst ? (
            <>
              <Player
                loop
                autoplay
                style={{ width: '21.875rem', height: '14.875rem' }}
                src='https://assets7.lottiefiles.com/datafiles/vhvOcuUkH41HdrL/data.json'
              />
              <h3>Your bag is empty</h3>
              <p>
                Looks like you haven’t added any items to the bag yet. Start
                shopping to fill it in.
              </p>
            </>
          ) : (
            <>
              <ProductCart
                key={2}
                name='Mens Casual Premium Slim Fit T-Shirts'
                price={22.3}
                image='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
              />
              <ProductCart
                key={2}
                name='Mens Casual Premium Slim Fit T-Shirts'
                price={22.3}
                image='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
              />
              <ProductCart
                key={2}
                name='Mens Casual Premium Slim Fit T-Shirts'
                price={22.3}
                image='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
              />
              <ProductCart
                key={2}
                name='Mens Casual Premium Slim Fit T-Shirts'
                price={22.3}
                image='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
              />
              <ProductCart
                key={2}
                name='Mens Casual Premium Slim Fit T-Shirts'
                price={22.3}
                image='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
              />
              <ProductCart
                key={2}
                name='Mens Casual Premium Slim Fit T-Shirts'
                price={22.3}
                image='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
              />
            </>
          )}
        </div>

        <footer>
          {tst && (
            <div>
              <span>
                Shipping &#38; Handling: <strong>$0.00</strong>
              </span>
              <span>
                Discount: <strong>$0.00</strong>
              </span>
              <span>
                Grand total: <strong>$0.00</strong>
              </span>
            </div>
          )}

          <button type='button' className={tst && 'active'}>
            {!tst ? 'Start shopping' : 'Go to checkout'}
          </button>
        </footer>
      </div>
    </Container>
  );
};
