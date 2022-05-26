/// <reference types="cypress" />

import 'animate.css';

describe('product elements', () => {
  beforeEach(() => {
    cy.renderProductComponent();
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
