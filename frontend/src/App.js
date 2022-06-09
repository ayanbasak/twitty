import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "./Components/sub-components/ScrollToTop";
import { Routes } from "./Routes";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <ScrollToTop />
        <Helmet>
          <title>Twitty</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Fragment>
          <Routes />
        </Fragment>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
