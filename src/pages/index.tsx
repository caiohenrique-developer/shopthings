import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MediaQuery from 'react-responsive';

import Head from 'next/head';
import Image from 'next/image';

import { hostEnv } from '@services/api';

import { Product } from '@components/Product';

import { Container } from '@styles/home';

import { responsiveBreakpoint } from '@utils/responsiveBreakpoint';

import bannerTop from '../../public/assets/home-banner-top.png';
import { sum, subtract } from '../store/actions/Calculator';
import { resultCalc } from '../store/selectors/Calculator';

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
  const result = useSelector(resultCalc);

  const dispatch = useDispatch();

  const [productApi, setProductApi] = useState<FetchProductProps[]>([]);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

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
        <MediaQuery minDeviceWidth={desktop.breakpoint.min}>
          <header>
            <Image
              src={bannerTop}
              alt='Banner top from home page'
              width={800}
              height={534}
              objectFit='cover'
            />
          </header>
        </MediaQuery>

        <input
          type='number'
          placeholder='a'
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
        />
        <input
          type='number'
          placeholder='b'
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
        />
        <button
          type='button'
          onClick={() => {
            dispatch(sum(a, b));
          }}
        >
          somar
        </button>

        <button
          type='button'
          onClick={() => {
            dispatch(subtract(a, b));
          }}
        >
          subtrair
        </button>

        <strong>Resultado: {result}</strong>

        <section>
          {productApi.map(({ id, title, price, description, image }) => (
            <Product
              key={id}
              name={title}
              price={price}
              description={description}
              image={image}
            />
          ))}
        </section>
      </Container>
    </>
  );
}
