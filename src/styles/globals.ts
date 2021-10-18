import { createGlobalStyle } from 'styled-components';

import { responsiveLayout } from '@styles/responsiveLayout';

export default createGlobalStyle`
  /* Root variables */
  :root {
    /* Colors */
    --background:#212121;
    --white_fff:#ffffff;
    --black_000:#000000;

    /* Fonts */
    --roboto: 'Roboto';
    --poppins: 'Poppins';
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
      background: var(--background);

      &::-webkit-scrollbar {
        width: 8px;
        height: 0;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        background: var(--background);
        border-radius: 5px;
      }

      button {
        cursor: pointer;
        background: transparent;
        font-family: var(--roboto);
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
