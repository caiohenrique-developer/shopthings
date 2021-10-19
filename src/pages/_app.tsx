import React from 'react';

import { AppProps } from 'next/app';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import GlobalStyles from '@styles/globals';

import 'animate.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />

      <GlobalStyles />
    </>
  );
}
