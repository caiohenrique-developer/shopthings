import React from 'react';

import { BackToTopBtnProps } from '@components/BackToTopBtn/types';

import BackToTopIcon from '@assets/icon-arrow-up.svg';

import { Container } from './styles';

export const BackToTopBtn = ({
  onClickHandler,
}: BackToTopBtnProps): JSX.Element => {
  return (
    <Container onClick={() => onClickHandler()} data-tst='back-to-top-btn'>
      <BackToTopIcon />
    </Container>
  );
};
