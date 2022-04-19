/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/');
});

describe("check the user's header interactions handler", () => {
  it('should be able to click on the application logotipo to go to home page', () => {
    // find and click on the application logotipo element
    cy.get('a[data-tst=go-to-home]')
      .should('be.visible')
      .should('not.have.attr', 'target', '_blank')
      .should('have.attr', 'href', '/')
      .click();

    // check if the user is redirected to the home page
    cy.url().should('include', '/');
    cy.location('pathname').should('eq', '/');
  });
});

export {};
