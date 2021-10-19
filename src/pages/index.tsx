import React from 'react';

import Head from 'next/head';

import { Product } from '@components/Product';

import { Container } from '@styles/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Shopthings</title>
      </Head>

      <Container className='app-container'>
        <div>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </Container>
    </>
  );
}
