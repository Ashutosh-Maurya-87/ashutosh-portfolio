import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { themeConfig } from "./theme";
// import { GlobalStyles } from "./global";
import { ThemeContext } from "./context/themeContext";
function App() {
  return (
    <ThemeContext.Provider
      value={
        themeConfig 
      }
    >
      {/* <GlobalStyles /> */}
      <div>
        <Main theme={themeConfig} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
