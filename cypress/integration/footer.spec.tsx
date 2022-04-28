/// <reference types="cypress" />

import React from 'react';

import { mount } from '@cypress/react';

import { BackToTopBtn } from '@components/BackToTopBtn';
import { Footer } from '@components/Footer';

import GlobalStyles from '@styles/globals';

describe("check the user's footer interactions handler", () => {
  it('should be able to click on the back to top button to return to the top of the page', () => {
    // render and make assertions to back to top button element
    mount(
      <>
        <BackToTopBtn />
        <GlobalStyles />
      </>,
    );

    cy.get('button[data-tst=back-to-top-btn]')
      .should('be.visible')
      .and('be.enabled')
      .click();

    // check that the user is at the top of the page
    cy.window().its('scrollY').should('equal', 0);
  });

  it("should be able to click on the anchor link to go to my project's repository", () => {
    // render and make assertions to anchor link element
    mount(
      <>
        <Footer />
        <GlobalStyles />
      </>,
    );

    cy.get('a[data-tst=repository-link]')
      .scrollIntoView()
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
    // render and make assertions to the element with the application date
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
