/// <reference types="cypress" />

import React from 'react';
import { Provider } from 'react-redux';

import { mount } from '@cypress/react';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistentStore } from '@store/index';

import { Cart } from '@components/Cart';

import { CartOpenProvider } from '@hooks/useCartOpen';

import GlobalStyles from '@styles/globals';

import 'animate.css';

describe('header - cart menu', () => {
  beforeEach(() => {
    // mount the component in the DOM
    mount(
      <>
        <Provider store={store}>
          <PersistGate persistor={persistentStore}>
            <CartOpenProvider>
              <Cart />
            </CartOpenProvider>
          </PersistGate>
        </Provider>

        <GlobalStyles />
      </>,
    );
  });

  it('should be able to click on the close cart button to close the cart menu', () => {
    // check if the cart menu is visible and find and click on the close cart button
    cy.get('section[data-tst=responsive-cart-menu]')
      .should('be.visible')
      .find('button[data-tst=close-cart-btn]')
      .should('exist')
      .and('be.enabled')
      .click();

    // check if the cart menu is not visible
    cy.get('nav[data-tst=responsive-cart-menu]').should('not.exist');
  });

  it('should not be able to submit the cart menu data to checkout page', () => {
    // check if the cart menu is visible and find and click on the go to checkout button
    cy.get('section[data-tst=responsive-cart-menu]')
      .should('be.visible')
      .find('button[data-tst=go-to-checkout-btn]')
      .should('be.visible')
      .and('be.enabled')
      .click();

    // the checkout page must not exist
    cy.get('section[data-tst=checkout]').should('not.exist');
  });
});

export {};
