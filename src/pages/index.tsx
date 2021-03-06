import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';

import Head from 'next/head';
import Image from 'next/image';

import { hostEnv } from '@services/api';

import { Product } from '@components/Product';

import { Container } from '@styles/home';

import { responsiveBreakpoint } from '@utils/responsiveBreakpoint';

type FetchProductProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    count: number;
  };
};

export default function Home() {
  const [productApi, setProductApi] = useState<FetchProductProps[]>([]);

  const { desktop } = responsiveBreakpoint;

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const { data: products } = await hostEnv.get<FetchProductProps[]>(
          'products',
        );

        setProductApi(products);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Home | Shopthings</title>
      </Head>

      <Container className='app-container'>
        <MediaQuery minWidth={desktop.breakpoint.min}>
          <header>
            <Image
              src='/assets/home-banner-top.png'
              alt='Banner top from home page'
              width={800}
              height={534}
              objectFit='cover'
            />
          </header>
        </MediaQuery>

        <section>
          {productApi.map(
            ({ id, title, price, category, description, image, rating }) => (
              <Product
                key={id}
                productID={id}
                name={title}
                image={image}
                price={price}
                stock={rating.count}
                category={category}
                description={description}
              />
            ),
          )}
        </section>
      </Container>
    </>
  );
}
