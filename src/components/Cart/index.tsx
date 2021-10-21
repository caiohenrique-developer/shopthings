import React, { useEffect, useState } from 'react';

import { Player } from '@lottiefiles/react-lottie-player';

import { hostEnv } from '@services/api';

import { ProductCart } from '@components/ProductCart';

import CloseIconSVG from '@assets/close-icon.svg';

import { Container } from './styles';

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

export const Cart = () => {
  const tst = true;

  const [productApi, setProductApi] = useState<FetchProductProps[]>([]);

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
    <Container>
      <div>
        <header>
          <button type='button'>
            <CloseIconSVG />
          </button>

          {tst && (
            <span>
              Total items: <strong>8</strong>
            </span>
          )}
        </header>

        <div>
          {!tst ? (
            <>
              <Player
                loop
                autoplay
                style={{ width: '21.875rem', height: '14.875rem' }}
                src='https://assets7.lottiefiles.com/datafiles/vhvOcuUkH41HdrL/data.json'
              />
              <h3>Your bag is empty</h3>
              <p>
                Looks like you haven’t added any items to the bag yet. Start
                shopping to fill it in.
              </p>
            </>
          ) : (
            <>
              {productApi.map(({ id, title, price, description, image }) => (
                <ProductCart
                  key={id}
                  name={title}
                  price={price}
                  image={image}
                />
              ))}
            </>
          )}
        </div>

        <footer>
          {tst && (
            <div>
              <span>
                Shipping &#38; Handling: <strong>$ 0.00</strong>
              </span>
              <span>
                Discount: <strong>$ 0.00</strong>
              </span>
              <span>
                Grand total: <strong>$ 0.00</strong>
              </span>
            </div>
          )}

          <button type='button' disabled>
            Start shopping
          </button>
        </footer>
      </div>
    </Container>
  );
};
