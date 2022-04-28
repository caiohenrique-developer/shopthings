/// <reference types="cypress" />

import React from 'react';

import { mount } from '@cypress/react';

import { BackToTopBtn } from '@components/BackToTopBtn';

import GlobalStyles from '@styles/globals';

describe("check the user's footer interactions handler", () => {
  it('should be able to click on the back to top button to return to the top of the page', () => {
    // render and make validations to back to top button element
    mount(
      <>
        <BackToTopBtn onClickHandler={cy.stub().as('scrollToTopEv')} />
        <GlobalStyles />
      </>,
    );

    cy.get('button[data-tst=back-to-top-btn]')
      .should('be.visible')
      .and('be.enabled')
      .click();

    cy.get('@scrollToTopEv')
      .should('have.been.calledOnce')
      .and('have.been.calledWithExactly');

    // check that the user is at the top of the page
    cy.window().its('scrollY').should('equal', 0);
  });
});
