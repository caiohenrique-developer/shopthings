/// <reference types="cypress" />

import React from 'react';
import { Provider } from 'react-redux';

import { mount } from '@cypress/react';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistentStore } from '@store/index';

import { Header } from '@components/Header';

import { CartOpenProvider } from '@hooks/useCartOpen';

import GlobalStyles from '@styles/globals';

import { responsiveBreakpoint } from '@utils/responsiveBreakpoint';

import 'animate.css';

describe("check the user's header elements interactions handler", () => {
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

  it('should be able to click on the cart button to open the cart menu', () => {
    // check if the cart menu is not visible
    cy.get('section[data-tst=responsive-cart-menu]').should('not.exist');

    // find and click on the cart element
    cy.get('button[data-tst=cart-btn]')
      .should('exist')
      .and('not.be.disabled')
      .click();

    // check if the cart menu is visible
    cy.get('section[data-tst=responsive-cart-menu]').should('be.visible');
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
      cy.get('button[data-tst=burger-btn]')
        .should('exist')
        .and('not.be.disabled')
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
      cy.get('button[data-tst=burger-btn]')
        .should('exist')
        .and('not.be.disabled')
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
      cy.get('button[data-tst=burger-btn]')
        .should('exist')
        .and('not.be.disabled')
        .click();

      // check if the navigation menu is not visible
      cy.get('nav[data-tst=responsive-navigation-menu]').should('not.exist');
    });
  });
});

export {};
