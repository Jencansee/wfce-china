import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	*, ::after, ::before { box-sizing: border-box; padding: 0; margin: 0; }

	:root {
		font-size: 68.5%; 
		font-family: 'Ubuntu', sans-serif;
		color: #282828;
	}

	body {
		font-size: 1.6rem;
	}

	a {
	  color: inherit;
	  text-decoration: none;
	}
	
	ul { list-style: none; }
	button { border: 0; cursor: pointer; font-family: inherit; }
`;

export default GlobalStyles;