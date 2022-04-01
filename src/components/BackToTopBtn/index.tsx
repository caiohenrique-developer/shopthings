import React from 'react';

import BackToTopIcon from '@assets/icon-arrow-up.svg';

import { Container } from './styles';

export const BackToTopBtn = (): JSX.Element => {
  return (
    <Container type='button'>
      <BackToTopIcon />
    </Container>
  );
};
