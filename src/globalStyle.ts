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
    --color-black: #3C3C3C;
    --color-orange: #FA982F;
    --color-red: #F54A48;
  }
 
  body {
    background-color: var(--color-white);
    color: var(--color-black);
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4 {
    font-weight: 600;
  }
  
  body,
  input,
  textarea,
  select,
  button {
	  font: 400, 0.825rem, 'Poppins', sans-serif;
    color: var(--color-black);
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
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
