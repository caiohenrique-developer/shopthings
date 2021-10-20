import { createGlobalStyle } from 'styled-components';

import { responsiveLayout } from '@styles/responsiveLayout';

export default createGlobalStyle`
  /* Root variables */
  :root {
    /* Colors */
    --background:#F0F0F8;
    --white_fff:#ffffff;
    --gray_727:#72757E;
    --gray_aca:#ACAEAF;
    --black_2c3:#2C3144;
    --purple_424:#424966;
    --purple_608:#6082C0;
    --linear_gradient: linear-gradient(
        0deg,
        #2C3144 0%,
        #424966 100%
      );

    /* Fonts */
    --roboto: 'Roboto'; // fw: 300;400;700
    --poppins: 'Poppins'; // fw: 600;700
    --light: 300;
    --regular: 400;
    --medium: 600;
    --bold: 700;
  }

  * {
    border: 0;
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

    font: 1rem var(--roboto), sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media(max-width: 1080px) { font-size: 93.75%; }

    @media(max-width: 720px) { font-size: 87.5%; }

    body, input, textarea, select, button {
      font-weight: 400;

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        box-shadow: 0 0 0 1000px #ffffff00 inset;
        transition: 5000s ease-in-out 0s;
      }
    }

    body {
      color: var(--black_2c3);
      background: var(--background);

      .app-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1.25rem;
      }

      &::-webkit-scrollbar {
        width: 8px;
        height: 0;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        background: var(--purple_424);
        border-radius: 5px;
      }

      button {
        cursor: pointer;
        background: transparent;
      }

      [disabled] {
        opacity: 0.5;
        cursor: not-allowed;
      }

      h1, h2, h3, h4, h5, h6, strong { font-weight: 600; }

      ol, ul { list-style: none; }

      a {
        color: inherit;
        text-decoration: none;
      }

      /* Responsive layout */
      ${responsiveLayout}
    }
  }
`;
