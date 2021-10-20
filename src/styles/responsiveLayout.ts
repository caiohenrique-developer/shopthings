import { opacify } from 'polished';
import { css } from 'styled-components';

export const responsiveLayout = css`
  /* Desktop */
  @media screen and (min-width: 1024px) {
    #__next {
      main.app-container > div:first-of-type {
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
    }
  }
  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    #__next {
      main.app-container > div {
        gap: 3rem 1rem;
        grid-template-columns: 1fr 1fr;

        margin: 4rem 0;

        > div {
          gap: 0 1.75rem;
          grid-template-columns: 0.5fr 1fr;
        }
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
      main.app-container > div {
        gap: 3rem 1rem;
        grid-template-columns: 1fr;

        margin: 4rem 0;

        > div {
          gap: 0 1rem;
          grid-template-columns: 0.4fr 1fr;

          > div:last-of-type button {
            padding: 0.8rem 0.625rem;
          }
        }
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
  /* Custom Tablet & Mobile */
  @media screen and (min-width: 300px) and (max-width: 1023px) {
    #__next {
      position: relative;

      header .app-container {
        padding: 0.25rem 1.25rem;

        > a {
          width: 3rem;
        }

        nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;

          height: 100vh;
          padding-right: 2rem;
          background: ${opacify(-0.5, '#000')};

          ul {
            gap: 1.25rem;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            height: 100%;
            padding: 2rem;
            max-width: fit-content;
            border-radius: 0 0.5rem 0.5rem 0;
            background: var(--linear_gradient);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

            li {
              a {
                color: var(--white_fff);
                font-weight: var(--regular);
              }
            }
          }
        }

        div {
          align-items: center;

          button:first-of-type {
            z-index: 2;
          }
        }
      }
    }
  }
`;
