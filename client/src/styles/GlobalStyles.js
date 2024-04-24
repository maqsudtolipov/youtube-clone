import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		--color-bg: #0f0f0f;
		--color-white: #f1f1f1;
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
		line-height: 1.5;
		color: var(--color-white);
		background-color: var(--color-bg);
	}
	
	a {
		text-decoration: none;
	}
	
	ol, ul {
    list-style: none;
	}

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
`;

export default GlobalStyles;
