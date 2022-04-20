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

  it('should be able to click on the responsive navigation menu button', () => {
    // find and click on the responsive navigation menu button
    cy.get('button[data-tst=burger-btn]')
      .should('be.visible')
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
});

export {};
