import React from 'react';

import BackToTopIcon from '@assets/icon-arrow-up.svg';

import { Container } from './styles';

export const BackToTopBtn = (): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container onClick={scrollToTop}>
      <BackToTopIcon />
    </Container>
  );
};
