import React from "react";
import "./toggleTheme.css";
import { useEffect } from "react";
import { useState } from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("dark");
  const [isToggling, setIsToggling] = useState(false);

  const handleTheme = () => {
    setIsToggling(true);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      setIsToggling(false);
    }, 300);
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  return (
    <>
      <button className="theme-btn " onClick={handleTheme}>
        <span className={`icon ${isToggling ? "fade-out" : ""}`}>
          {theme === "dark" ? (
            <TipsAndUpdatesIcon className="text-white" />
          ) : (
            <DarkModeIcon className="text-white" />
          )}
        </span>
      </button>
    </>
  );
}
