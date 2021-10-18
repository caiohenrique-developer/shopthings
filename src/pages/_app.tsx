import React from 'react';

import { AppProps } from 'next/app';

import GlobalStyles from '@styles/globals';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <GlobalStyles />
    </>
  );
}
