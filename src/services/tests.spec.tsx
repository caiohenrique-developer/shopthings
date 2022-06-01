/// <reference types="cypress" />

describe('HTTP req', () => {
  it('should be able to stub response with fixture data', () => {
    // stub response with fixture data using cy.intercept()
    cy.intercept('GET', '/products', {
      statusCode: 200,
      body: {
        fixture: 'products',
      },
    }).as('getProducts');
  });
});

export {};
