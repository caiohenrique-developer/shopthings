import React from 'react';
import MediaQuery from 'react-responsive';

import Head from 'next/head';
import Image from 'next/image';

import { Product } from '@components/Product';

import { Container } from '@styles/home';

import { responsiveBreakpoint } from '@utils/responsiveBreakpoint';

import bannerTop from '../../public/assets/home-banner-top.png';

export default function Home() {
  const { desktop } = responsiveBreakpoint;

  return (
    <>
      <Head>
        <title>Home | Shopthings</title>
      </Head>

      <Container className='app-container'>
        <MediaQuery minWidth={desktop.breakpoint.min}>
          <div>
            <Image
              src={bannerTop}
              alt='Banner top from home page'
              width={800}
              height={534}
              objectFit='cover'
            />
          </div>
        </MediaQuery>

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
