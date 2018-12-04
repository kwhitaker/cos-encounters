import { injectGlobal } from "reakit";

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Pirata+One");

  html {
    font-size: 16px;    
  }

  @media screen and (min-width: 25em){
    html { font-size: calc( 16px + (24 - 16) * (100vw - 400px) / (800 - 400) ); }
  }

  /* Safari <8 and IE <11 */
  @media screen and (min-width: 25em){
    html { font-size: calc( 16px + (24 - 16) * (100vw - 400px) / (800 - 400) ); }
  }
  @media screen and (min-width: 50em){

  html { font-size: calc( 16px + (24 - 16) * (100vw - 400px) / (800 - 400) ); }
  }

  body {
    margin: 0;
    padding: 1.5rem;
    font-family: "Open Sans", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(246, 246, 246);
    color: rgb(25, 25, 25);
  }
`;
