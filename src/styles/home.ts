import styled from 'styled-components';

export const Container = styled.main`
  > div {
    display: grid;
    gap: 5rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

    margin: 8rem 0;
  }
`;
