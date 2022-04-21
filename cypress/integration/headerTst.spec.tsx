import React from 'react';

import { mount } from '@cypress/react';

import { Header } from '@components/Header';

it('renders learn react link', () => {
  mount(<Header />);
  // cy.get('a').contains('Learn React');
});
