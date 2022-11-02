import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	*, ::after, ::before { 
		text-rendering: geometricPrecision;
		-webkit-tap-highlight-color: transparent;
		box-sizing: border-box; padding: 0; margin: 0; 
	}

	* {
		::-webkit-scrollbar { width: 7px; }
  	::-webkit-scrollbar-thumb {
  	  background: #bec4c4;
			border-radius: 10px;
  	}
  	::-webkit-scrollbar-thumb:hover { background: #333333; }
	}

	:root {
		font-size: 68.5%; 
		font-family: 'Ubuntu', sans-serif;
		color: #282828;
	}

	body {
		font-size: 1.6rem;
	}

	ul, ol { list-style: none; }
	a { color: inherit; text-decoration: none; }
	button { border: 0; cursor: pointer; font-family: inherit; }
`;

export default GlobalStyles;