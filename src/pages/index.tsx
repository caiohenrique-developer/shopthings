import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

import { Product } from '@components/Product';

import { Container } from '@styles/home';

import bannerTop from '../../public/assets/home-banner-top.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Shopthings</title>
      </Head>

      <Container className='app-container'>
        <div>
          <Image
            src={bannerTop}
            alt='Banner top from home page'
            width={800}
            height={534}
            objectFit='cover'
          />
        </div>

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
