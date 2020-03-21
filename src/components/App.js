import React from "react";
import Navbar from "./Navbar";
import Routes from "../routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../styles/global";
import { ThemeProvider } from "styled-components";
import { colorsDark, colorsLight } from "../styles/palette";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={colorsDark}>
        <GlobalStyles />
        <Navbar />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
