import styled from 'styled-components';

export const Container = styled.header`
  border: 1px solid var(--gray_aca);

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1200px;
    margin: 0 auto;
    padding: 1.25rem;

    > a {
      width: 4rem;
    }

    nav ul {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 2.25rem;

      li {
        &:first-of-type a {
          color: var(--gray_727);
        }

        a {
          color: var(--gray_aca);
          font-weight: var(--bold);
          text-transform: uppercase;
        }
      }
    }

    div {
      display: flex;
      gap: 2rem;

      button svg {
        font-size: 1.4rem;
        color: var(--gray_aca);
      }
    }
  }
`;
