import { opacify } from 'polished';
import { css } from 'styled-components';

export const responsiveLayout = css`
  /* Desktop */
  @media screen and (min-width: 1024px) {
  }
  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    #__next {
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
  /* Custom Tablet & Mobile */
  @media screen and (min-width: 300px) and (max-width: 1023px) {
    #__next {
      position: relative;

      header .app-container nav {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;

        padding-right: 2rem;
        background: ${opacify(-0.5, '#000')};

        ul {
          display: table;
          height: 100%;

          padding: 2rem;
          border-radius: 0 0.5rem 0.5rem 0;
          background: var(--linear_gradient);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

          li {
            & + li {
              margin-top: 1.25rem;
            }

            a {
              color: var(--white_fff);
              font-weight: var(--regular);
            }
          }
        }
      }
    }
  }
`;
