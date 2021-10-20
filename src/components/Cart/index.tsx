import React from 'react';

import { Player } from '@lottiefiles/react-lottie-player';

import { Product } from '@components/Product';

import CloseIconSVG from '@assets/close-icon.svg';

import { Container } from './styles';

export const Cart = () => {
  const tst = true;

  return (
    <Container>
      <div>
        <header>
          <button type='button'>
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
            <Product
              key='id'
              name='title'
              price={88888}
              description='description'
              image='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
            />
          )}
        </div>

        <footer>
          {tst && (
            <div>
              <span>
                Shipping &#38; Handling: <strong>$ 0.00</strong>
              </span>
              <span>
                Discount: <strong>$ 0.00</strong>
              </span>
              <span>
                Grand total: <strong>$ 0.00</strong>
              </span>
            </div>
          )}

          <button type='button' disabled>
            Start shopping
          </button>
        </footer>
      </div>
    </Container>
  );
};
