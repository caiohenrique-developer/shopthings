import React from 'react';
import { useSelector } from 'react-redux';

import { Player } from '@lottiefiles/react-lottie-player';

import {
  productCartManagerSelector,
  productCartManagerTotalPriceSelector,
  totalProductCartManagerSelector,
} from '@store/selectors/productCartManager';

import { Container } from '@components/Cart/styles';
import { ProductCart } from '@components/ProductCart';

import { useCartOpen } from '@hooks/useCartOpen';

import CloseIconSVG from '@assets/close-icon.svg';
import placeholder from '@assets/product-placeholder.png';

import { formattedCurrency } from '@utils/formatCurrency';

export const Cart = () => {
  const { setCartOpen } = useCartOpen();
  const productList = useSelector(productCartManagerSelector);
  const totalProductCart = useSelector(totalProductCartManagerSelector);
  const productCartTotalPrice = useSelector(
    productCartManagerTotalPriceSelector,
  );

  return (
    <Container
      className='animate__animated animate__fadeInDown'
      data-tst='responsive-cart-menu'
    >
      <div>
        <header>
          <button
            type='button'
            onClick={() => setCartOpen(false)}
            data-tst='close-cart-btn'
          >
            <CloseIconSVG />
          </button>

          {totalProductCart ? (
            <span>
              Total items: <strong>{totalProductCart}</strong>
            </span>
          ) : (
            <></>
          )}
        </header>

        <div className={totalProductCart ? 'active' : ''}>
          {!totalProductCart ? (
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
            productList.map(({ productID, name, price, quantity, image }) => {
              return (
                <ProductCart
                  key={productID}
                  productID={productID}
                  name={name}
                  price={price}
                  quantity={quantity}
                  image={!image ? placeholder : image}
                />
              );
            })
          )}
        </div>

        <footer>
          {totalProductCart ? (
            <div>
              <span>
                Shipping &#38; Handling: <strong>$0.00</strong>
              </span>
              <span>
                Discount: <strong>$0.00</strong>
              </span>
              <span>
                Grand total:
                <strong>
                  {productCartTotalPrice
                    ? formattedCurrency(productCartTotalPrice, 'USD')
                    : '$0.00'}
                </strong>
              </span>
            </div>
          ) : (
            <></>
          )}

          <button
            type='button'
            className={totalProductCart ? 'active' : ''}
            data-tst='go-to-checkout-btn'
          >
            {!totalProductCart ? 'Start shopping' : 'Go to checkout'}
          </button>
        </footer>
      </div>
    </Container>
  );
};
