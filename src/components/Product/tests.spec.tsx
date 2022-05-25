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
    // mount the component in the DOM
    mount(
      <>
        <Provider store={store}>
          <PersistGate persistor={persistentStore}>
            <CartOpenProvider>
              <Product
                key={8}
                productID={8}
                name='Pierced Owl Rose Gold Plated Stainless Steel Double'
                image='https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'
                price={55}
                stock={56}
                category='jewelery'
                description='Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel'
              />
            </CartOpenProvider>
          </PersistGate>
        </Provider>

        <GlobalStyles />
      </>,
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
