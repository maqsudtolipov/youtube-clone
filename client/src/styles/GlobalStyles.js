import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
		font-size: 1.6rem;
		line-height: 1.5;
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
