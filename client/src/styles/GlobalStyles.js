import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-brand: #f00;

    --color-bg: #0f0f0f;
    --color-white: #f1f1f1;

    --color-text-secondary: #aaa;

    --color-blue: #3ea6ff;
    --color-blue-dark: #13324c; // base 70% 
    --color-blue-dark-5: rgba(19, 50, 76, 0.5);

    --color-border: #303030;

    --color-modal: #282828;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    line-height: 1.4;
    color: var(--color-white);
    background-color: var(--color-bg);
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
    //color: inherit;
  }

  ol, ul {
    list-style: none;
  }

  input, button, textarea, select {
    font: inherit;
  }

  button {
    background: transparent;
    cursor: pointer;
    border: none;
  }

  svg {
    color: inherit;
    font-size: 2.4rem;

    // This is because icons too large compared to original
    scale: .8;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }
`;

export default GlobalStyles;
