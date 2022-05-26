// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import React from 'react';
import { Provider } from 'react-redux';

import { mount } from '@cypress/react';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistentStore } from '@store/index';

import { Product } from '@components/Product';

import { CartOpenProvider } from '@hooks/useCartOpen';

import GlobalStyles from '@styles/globals';

// -- My custom commands --
Cypress.Commands.add('renderProductComponent', () => {
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
