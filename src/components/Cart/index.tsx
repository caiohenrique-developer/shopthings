import React from 'react';
import { useSelector } from 'react-redux';

import { Player } from '@lottiefiles/react-lottie-player';

import { addProductToCartSelector } from '@store/selectors/addProductToCart';

import { ProductCart } from '@components/ProductCart';

import { useCartOpen } from '@hooks/useCartOpen';

import CloseIconSVG from '@assets/close-icon.svg';
import placeholder from '@assets/product-placeholder.png';

import { Container } from './styles';

export const Cart = () => {
  const { setCartOpen } = useCartOpen();
  const selectedProduct = useSelector(addProductToCartSelector);
  const { name, price, image } = selectedProduct;

  const tst = true;

  return (
    <Container className='animate__animated animate__fadeInRightBig'>
      <div>
        <header>
          <button type='button' onClick={() => setCartOpen(false)}>
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
              <ProductCart
                key={2}
                name={name}
                price={price}
                image={image === '/' ? placeholder : image}
              />
              <ProductCart
                key={2}
                name={name}
                price={price}
                image={image === '/' ? placeholder : image}
              />
              <ProductCart
                key={2}
                name={name}
                price={price}
                image={image === '/' ? placeholder : image}
              />
              <ProductCart
                key={2}
                name={name}
                price={price}
                image={image === '/' ? placeholder : image}
              />
              <ProductCart
                key={2}
                name={name}
                price={price}
                image={image === '/' ? placeholder : image}
              />
              <ProductCart
                key={2}
                name={name}
                price={price}
                image={image === '/' ? placeholder : image}
              />
              <ProductCart
                key={2}
                name={name}
                price={price}
                image={image === '/' ? placeholder : image}
              />
              <ProductCart
                key={2}
                name={name}
                price={price}
                image={image === '/' ? placeholder : image}
              />
            </>
          )}
        </div>

        <footer>
          {tst && (
            <div>
              <span>
                Shipping &#38; Handling: <strong>$0.00</strong>
              </span>
              <span>
                Discount: <strong>$0.00</strong>
              </span>
              <span>
                Grand total: <strong>$0.00</strong>
              </span>
            </div>
          )}

          <button type='button' className={tst && 'active'}>
            {!tst ? 'Start shopping' : 'Go to checkout'}
          </button>
        </footer>
      </div>
    </Container>
  );
};
