/// <reference types="cypress" />

import React from 'react';

import { mount } from '@cypress/react';

import { Footer } from '@components/Footer';

import GlobalStyles from '@styles/globals';

describe("check the user's footer interactions handler", () => {
  it("should be able to click on the anchor link to go to my project's repository", () => {
    // render and make validations to anchor link element
    mount(
      <>
        <Footer />
        <GlobalStyles />
      </>,
    );

    cy.get('a[data-tst=repository-link]')
      .should('be.visible')
      .should('have.attr', 'target', '_blank')
      .should(
        'have.attr',
        'href',
        'https://github.com/caiohenrique-developer/shopthings',
      )
      .click();
  });

  it('should be able to return application creation date', () => {
    // render and make validations to the element with the application date
    mount(
      <>
        <Footer />
        <GlobalStyles />
      </>,
    );

    const appCreatedAt = new Date(2021, 10, 1).getFullYear();
    const currentYear = new Date().getFullYear();
    const year =
      currentYear > appCreatedAt
        ? `${appCreatedAt}-${currentYear}`
        : currentYear;

    cy.get('p[data-tst=footer-description]')
      .should('be.visible')
      .contains(year);
  });
});
