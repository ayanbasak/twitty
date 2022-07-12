import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "../components/sub-component/ScrollToTop";
import { GlobalStyle } from "../styles/globalStyles";
import { darkTheme, lightTheme } from "../styles/theme";

export const ThemeContext = React.createContext(null);

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        {children}        
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
