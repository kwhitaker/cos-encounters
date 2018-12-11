import { injectGlobal } from "reakit";
import styledNormalize from "styled-normalize";

export const PirataFont = `"Pirata One", cursive`;

const fontSize = 1;
const formula = `calc(${fontSize}rem + (1.5 - ${fontSize}) * (100vw - 400px) / (800 - 400))`;

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Pirata+One");

  ${styledNormalize}

  html {
    font-size: 16px;    
  }

  @media screen and (min-width: 25em){
    html { font-size: ${formula} }
  }

  /* Safari <8 and IE <11 */
  @media screen and (min-width: 25em){
   html { font-size: ${formula} }
  }

  @media screen and (min-width: 50em){
    html { font-size: ${formula} }
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    font-family: "Open Sans", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;
