/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/');
});

// successful results
describe("check the user's successful interactions handler", () => {
  it('should be able to click on the back to top button to return to the top of the page', () => {
    // scroll down to the bottom of the page and find the back to top button element
    cy.get('button[data-tst=back-to-top-btn]')
      .scrollIntoView()
      .should('be.visible')
      .click();

    // check that the page is at the top of the page
    cy.window().its('scrollY').should('equal', 0);
  });

  it("should be able to click on the anchor link to go to my project's repository", () => {
    // scroll down to the bottom of the page and find the anchor link element
    cy.get('a[data-tst=repository-link]')
      .scrollIntoView()
      .should('be.visible')
      .should('have.attr', 'target', '_blank')
      .should('not.have.attr', 'href', undefined)
      .click();
  });

  it('should be able to return application creation date', () => {
    // scroll down to the bottom of the page and find the element with the application date
    const appCreatedAt = new Date(2021, 10, 1).getFullYear();
    const currentYear = new Date().getFullYear();
    const year =
      currentYear > appCreatedAt
        ? `${appCreatedAt}-${currentYear}`
        : currentYear;

    cy.get('p[data-tst=footer-description]')
      .scrollIntoView()
      .should('be.visible')
      .contains(year);
  });
});

// failure results
describe("check the user's failure interactions handler", () => {
  return {
    ok: false,
  };
});

export {};
