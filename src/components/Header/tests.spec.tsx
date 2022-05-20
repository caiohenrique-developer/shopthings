/// <reference types="cypress" />

import React from 'react';
import { Provider } from 'react-redux';

import { mount } from '@cypress/react';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistentStore } from '@store/index';

import { Cart } from '@components/Cart';
import { Header } from '@components/Header';

import { CartOpenProvider } from '@hooks/useCartOpen';

import GlobalStyles from '@styles/globals';

import { responsiveBreakpoint } from '@utils/responsiveBreakpoint';

import 'animate.css';

describe('header - general elements', () => {
  const {
    tablet: {
      breakpoint: { max: tabletMaxWidth, min: tabletMinWidth },
    },
  } = responsiveBreakpoint;

  beforeEach(() => {
    // mount the component in the DOM
    mount(
      <>
        <Provider store={store}>
          <PersistGate persistor={persistentStore}>
            <CartOpenProvider>
              <Header />
            </CartOpenProvider>
          </PersistGate>
        </Provider>

        <GlobalStyles />
      </>,
    );
  });

  it('should be able to click on the application logotipo to go to home page', () => {
    // find and click on the application logotipo element
    cy.get('a[data-tst=go-to-home]')
      .should('exist')
      .and('have.attr', 'href', '/');
  });

  it('should not be able to click on my account & search disabled button', () => {
    // find disabled buttons
    cy.get('button[data-tst=my-account-btn], button[data-tst=search-for-btn]')
      .should('exist')
      .and('be.disabled');
  });

  it('should be able to click on the open cart button to open the cart menu', () => {
    // check if the cart menu is not visible
    cy.get('section[data-tst=responsive-cart-menu]').should('not.exist');

    // find and click on the open cart element
    cy.get('button[data-tst=open-cart-btn]')
      .should('exist')
      .and('be.enabled')
      .click();

    // check if the cart menu is visible
    cy.get('section[data-tst=responsive-cart-menu]').should('be.visible');
  });

  it('should be able to click on the close cart button to close the cart menu', () => {
    // check if the cart menu is not visible
    cy.get('nav[data-tst=responsive-navigation-menu]').should('not.exist');

    // find and click on the open cart element
    cy.get('button[data-tst=open-cart-btn]')
      .should('exist')
      .and('be.enabled')
      .click();

    // check if the cart menu is visible
    cy.get('section[data-tst=responsive-cart-menu]')
      .should('be.visible')
      .find('button[data-tst=close-cart-btn]')
      .should('exist')
      .and('be.enabled')
      .click();

    // check if the cart menu is not visible
    cy.get('nav[data-tst=responsive-cart-menu]').should('not.exist');
  });

  // responsive tests
  context(`${tabletMaxWidth} x ${tabletMinWidth} viewport resolution`, () => {
    beforeEach(() => {
      // run these tests as if in a mobile or tablet device
      cy.viewport(tabletMaxWidth, tabletMinWidth);
    });

    it('should be able to click on the open responsive navigation menu button to open the navigation menu', () => {
      // check if the navigation menu is not visible
      cy.get('nav[data-tst=responsive-navigation-menu]').should('not.exist');

      // find and click on the open responsive navigation menu button
      cy.get('button[data-tst=open-burger-btn]')
        .should('exist')
        .and('be.enabled')
        .click();

      // check if the navigation menu is visible
      cy.get('nav[data-tst=responsive-navigation-menu]')
        .should('be.visible')
        .children('ul')
        .and('have.length', 1)
        .children('li')
        .and('have.length', 7)
        .children('a')
        .and('have.length', 7);
    });

    it('should be able to click on the close responsive navigation menu button to close the navigation menu', () => {
      // check if the navigation menu is not visible
      cy.get('nav[data-tst=responsive-navigation-menu]').should('not.exist');

      // find and click on the open responsive navigation menu button
      cy.get('button[data-tst=open-burger-btn]')
        .should('exist')
        .and('be.enabled')
        .click();

      // check if the navigation menu is visible
      cy.get('nav[data-tst=responsive-navigation-menu]')
        .should('be.visible')
        .children('ul')
        .and('have.length', 1)
        .children('li')
        .and('have.length', 7)
        .children('a')
        .and('have.length', 7);

      // find and click on the close responsive navigation menu button
      cy.get('button[data-tst=open-burger-btn]')
        .should('exist')
        .and('be.enabled')
        .click();

      // check if the navigation menu is not visible
      cy.get('nav[data-tst=responsive-navigation-menu]').should('not.exist');
    });
  });
});

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

  it('should not be able to submit the cart menu data to checkout page', () => {
    // check if the cart menu is visible
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
