/// <reference types="cypress" />

describe('check user buttons handler', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should click the back to top button to return to the top of the page', () => {
    // Scroll down to the bottom of the page and find the back to top button
    cy.get('button[data-tst=back-to-top-btn]')
      .scrollIntoView()
      .should('be.visible')
      .click();

    // Check that the page is at the top of the page
    cy.window().its('scrollY').should('equal', 0);
  });
});

export {};
