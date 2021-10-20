import styled from 'styled-components';

export const Container = styled.main`
  &.app-container {
    padding-top: 0;
  }

  > div:last-of-type {
    display: grid;
    gap: 5rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

    margin: 18rem 0 8rem;
  }
`;
