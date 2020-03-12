import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Light from "./styles/themes/light";
import Dark from "./styles/themes/dark";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

import usePersistedState from "./utils/userPersistedState";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', Light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? Dark : Light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default App;
