// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    // Product component type definition
    renderProductComponent(): Chainable<Element>;
  }
}
