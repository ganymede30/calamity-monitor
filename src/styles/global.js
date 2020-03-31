import { createGlobalStyle } from "styled-components";
import { mobile } from "./mediaQueries";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: Lato, Helvetica, Roboto, sans-serif;
    width: 100%;
    background: ${({ theme }) => theme.backgroundColor};
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
    height: Calc(100vh - 10vh);
  }

  ${mobile} {
    .webmap {
      height: Calc(90vh - 8vh);
`;

export default GlobalStyles;
