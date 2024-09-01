import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/theme.js";
import { useEffect } from "react";
import Toggle from "./Components/Toggle.jsx";
import Card from "./Components/Card.jsx";

function App() {
  const [tMode, setThemeMode] = useState("light");
  let tLight = () => {
    setThemeMode("light");
  };
  let tDark = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(tMode);
  }, [tMode]);
  return (
    <ThemeProvider value={{ tMode, tLight, tDark }}>
      <div className="bg-indigo-400 flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Toggle />
          </div>
          <div className="w-full max-w-sm mx-auto"><Card /></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
