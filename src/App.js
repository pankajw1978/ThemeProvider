import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Heading from "./components/Heading";

const LightTheme = {
  primary: "#333",
  secondary: "#999",
  background: "#fff",
};

const DarkTheme = {
  primary: "#ddd",
  secondary: "#aaa",
  background: "#333",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <ThemeProvider theme={themes[theme]}>
        <Heading theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
