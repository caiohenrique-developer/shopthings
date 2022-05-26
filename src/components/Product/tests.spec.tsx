/// <reference types="cypress" />

import React from 'react';
import { Provider } from 'react-redux';

import { mount } from '@cypress/react';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistentStore } from '@store/index';

import { Product } from '@components/Product';

import { CartOpenProvider } from '@hooks/useCartOpen';

import GlobalStyles from '@styles/globals';

import 'animate.css';

describe('product elements', () => {
  beforeEach(() => {
    cy.fixture('products').then(
      ({ id, title, price, image, rating, category, description }) => {
        // mount the component in the DOM
        mount(
          <>
            <Provider store={store}>
              <PersistGate persistor={persistentStore}>
                <CartOpenProvider>
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
                </CartOpenProvider>
              </PersistGate>
            </Provider>

            <GlobalStyles />
          </>,
        );
      },
    );
  });

  it('should be able to click on the add to cart button', () => {
    // find and click on the add to cart element
    cy.get('button[data-tst=add-to-cart-btn]')
      .should('exist')
      .and('be.enabled')
      .click();
  });
});

export {};
