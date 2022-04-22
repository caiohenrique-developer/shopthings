/// <reference types="cypress" />

import { responsiveBreakpoint } from '@utils/responsiveBreakpoint';

describe("check the user's header elements interactions handler", () => {
  beforeEach(() => {
    // visit the home page
    cy.visit('/');
  });

  const {
    tablet: {
      breakpoint: { max: tabletMaxWidth, min: tabletMinWidth },
    },
  } = responsiveBreakpoint;

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

  context(`${tabletMaxWidth} x ${tabletMinWidth} viewport resolution`, () => {
    beforeEach(() => {
      // run these tests as if in a mobile or tablet device
      cy.viewport(tabletMaxWidth, tabletMinWidth);
    });

    it('should be able to click on the responsive navigation menu button to open the navigation menu', () => {
      // check if the navigation menu is not visible
      cy.get('nav[data-tst=responsive-navigation-menu]').should('not.exist');

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

    it('should be able to click on the responsive navigation menu button to close the navigation menu', () => {
      // check if the navigation menu is not visible
      cy.get('nav[data-tst=responsive-navigation-menu]').should('not.exist');

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

      // find and click on the responsive navigation menu button
      cy.get('button[data-tst=burger-btn]')
        .should('be.visible')
        .and('not.be.disabled')
        .click();

      // check if the navigation menu is not visible
      cy.get('nav[data-tst=responsive-navigation-menu]').should('not.exist');
    });
  });

  it('should not be able to click on my account & search disabled button', () => {
    // find disabled buttons
    cy.get('button[data-tst=my-account-btn]')
      .should('exist')
      .and('be.disabled');

    cy.get('button[data-tst=search-for-btn]')
      .should('exist')
      .and('be.disabled');
  });
});

export {};
