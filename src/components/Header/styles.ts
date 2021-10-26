import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 8;

  background: var(--background);
  border-bottom: 1px solid var(--gray_aca);

  .app-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      width: 4rem;
      min-width: 2.5rem;
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

      button {
        svg {
          font-size: 1.4rem;
          color: var(--gray_aca);
          &.active {
            color: var(--purple_608);
          }
        }
        &:last-of-type span {
          color: var(--white_fff);
          border-radius: 2rem;
          background: var(--purple_424);
          padding: 0.25rem 0.5rem;
        }
      }
    }
  }
`;
