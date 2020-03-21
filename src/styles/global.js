import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: Lato, Helvetica, Roboto, sans-serif;
    width: 100vw;
    overflow-x: hidden;

  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;

    $:visited {
      color: inherit;
    }
  }

  .webmap {
    height: Calc(100vh - 68px);
  }

  `;

export default GlobalStyles;
