import React, { useState, useEffect, createContext } from "react";

import themes from "./themes";

export const ThemeContext = createContext(themes.dark);

/* eslint-disable react/prop-types */

const ThemeContextWrapper = ({ children }) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme-dictionaryApp")) || themes.dark
  );

  useEffect(() => {
    const currentTheme = JSON.parse(
      localStorage.getItem("theme-dictionaryApp")
    );
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme-dictionaryApp", JSON.stringify(theme));
  }, [theme]);

  const handleThemeChange = () => {
    theme.name === themes.light.name
      ? setTheme(themes.dark)
      : setTheme(themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
