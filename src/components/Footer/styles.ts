import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--white_fff);
  padding: 4rem 0;

  .app-container {
    nav {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      & + nav {
        margin-top: 3rem;
        padding-top: 3rem;
        border-top: 1px solid var(--gray_aca);
      }

      ul {
        padding: 0 2rem 2rem;

        &:first-of-type {
          padding-left: 0;
        }
        & + ul {
          border-left: 1px solid var(--gray_aca);
        }

        h4 {
          color: var(--purple_608);
          margin-bottom: 1.25rem;
        }

        li {
          margin-top: 0.5rem;

          a {
            display: flex;
            align-items: center;

            color: var(--gray_aca);

            &:before {
              content: '';

              display: block;
              width: 0.3rem;
              height: 0.3rem;

              background: var(--purple_608);
              border-radius: 50%;
              margin-right: 1rem;
            }
          }
        }
      }
    }

    p {
      padding: 2.6rem 2.6rem 0;

      color: var(--gray_aca);
      font-size: min(18px, 3vw);
      text-align: center;

      a {
        display: inline-block;
        color: var(--purple_608);

        &::after {
          content: '';

          display: block;
          width: 0;
          height: 1px;
          background: var(--purple_608);
          transition: 0.5s;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  }
`;
