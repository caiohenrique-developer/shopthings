import styled from 'styled-components';

export const Container = styled.main`
  &.app-container {
    padding-top: 0;
  }

  > div {
    &:first-of-type {
      position: relative;

      display: flex;
      justify-content: center;

      background: var(--white_fff);
      box-shadow: 0 0 50px rgb(0 0 0 / 5%);

      > div {
        position: relative;
        z-index: 1;
      }

      &:after {
        content: '';

        position: absolute;
        bottom: -6.25rem;

        display: block;
        width: 100%;
        height: 7.5rem;

        background: var(--white_fff);
        border-radius: 0 0 5rem 5rem;
        box-shadow: 0 20px 30px rgb(0 0 0 / 5%);
      }
    }
    &:last-of-type {
      display: grid;
      gap: 5rem 1rem;
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

      margin: 18rem 0 8rem;
    }
  }
`;
