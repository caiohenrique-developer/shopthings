/// <reference types="cypress" />

describe('check user buttons handler', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should click the back to top button to return to the top of the page', () => {
    // scroll down to the bottom of the page and find the back to top button
    cy.get('button[data-tst=back-to-top-btn]')
      .scrollIntoView()
      .should('be.visible')
      .click();

    // check that the page is at the top of the page
    cy.window().its('scrollY').should('equal', 0);
  });

  it('should click on the anchor link to go to my github project repository', () => {
    // scroll down to the bottom of the page and find the anchor link
    cy.get('a[data-tst=repository-link]')
      .scrollIntoView()
      .should('be.visible')
      .should('have.attr', 'target', '_blank')
      .should('not.have.attr', 'href', undefined)
      .click();
  });
});

export {};
