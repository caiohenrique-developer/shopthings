import React from 'react';
import { Provider } from 'react-redux';

import { AppProps } from 'next/app';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistentStore } from '@store/index';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import { CartOpenProvider } from '@hooks/useCartOpen';

import GlobalStyles from '@styles/globals';

import 'animate.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistentStore}>
          <CartOpenProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </CartOpenProvider>
        </PersistGate>
      </Provider>

      <GlobalStyles />
    </>
  );
}
