import React from 'react';

import { Container } from '@components/BackToTopBtn/styles';
import { BackToTopBtnProps } from '@components/BackToTopBtn/types';

import BackToTopIcon from '@assets/icon-arrow-up.svg';

export const BackToTopBtn = ({
  onClickHandler,
}: BackToTopBtnProps): JSX.Element => {
  return (
    <Container onClick={() => onClickHandler()} data-tst='back-to-top-btn'>
      <BackToTopIcon />
    </Container>
  );
};
