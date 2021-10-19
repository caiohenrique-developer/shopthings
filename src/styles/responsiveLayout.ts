import { css } from 'styled-components';

export const responsiveLayout = css`
  /* Desktop */
  @media screen and (min-width: 1024px) {
  }
  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    #__next {
      header .app-container nav {
        display: none;
      }

      footer .app-container {
        nav {
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem 0;

          &:first-of-type ul:last-of-type {
            border: none;
            padding: 0;
          }
        }
      }
    }
  }
  /* Mobile */
  @media screen and (max-width: 767px) {
    #__next {
      header .app-container nav {
        display: none;
      }

      footer {
        padding: 2rem 0;

        .app-container {
          nav {
            display: table;
            margin: 0 auto;

            & + nav {
              margin-top: 3rem;
            }
            &:first-of-type ul:last-of-type {
              padding-bottom: 0;
            }

            ul {
              padding: 0 2rem 2rem;

              & + ul {
                border: none;
              }
            }
          }
        }
      }
    }
  }
`;
