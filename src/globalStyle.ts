import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  :root {
    --color-white: #FFFFFF;
    --color-gray: #A2A2A2;
    --color-black-600: #3C3C3C;
    --color-orange: #FA982F;
    
  }
 
  body {
  background-color: var(--color-white);
  color: var(--white);
  font-family: 'Poppins', sans-serif;
  }
  
  body,
  input,
  textarea,
  select,
  button {
	font: 400, 1rem, 'Poppins', sans-serif;
  }

  button {
	cursor: pointer;
  }

  a {
	color: inherit;
	text-decoration: none;
  }

  @media (max-width: 1080px) {
	  html {
		font-size: 93.75%;
	  }
  }

  @media (max-width: 720px) {
	  html {
		font-size: 87.5%;
	  }
  }
`;
