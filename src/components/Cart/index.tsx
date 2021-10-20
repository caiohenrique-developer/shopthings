import React from 'react';

import { Player } from '@lottiefiles/react-lottie-player';

import CloseIconSVG from '@assets/close-icon.svg';

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
