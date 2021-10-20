import React from 'react';

import CloseIconSVG from '@assets/close-icon.svg';
import EmptyCartSVG from '@assets/empty-cart.svg';

import { Container } from './styles';

export const Cart = () => {
  return (
    <Container>
      <div>
        <header>
          <button type='button'>
            <CloseIconSVG />
          </button>
        </header>

        <div>
          <EmptyCartSVG />
          <h3>Your bag is empty</h3>
          <p>
            Looks like you haven’t added any items to the bag yet. Start
            shopping to fill it in.
          </p>
        </div>

        <footer>
          <button type='button' disabled>
            Start shopping
          </button>
        </footer>
      </div>
    </Container>
  );
};
