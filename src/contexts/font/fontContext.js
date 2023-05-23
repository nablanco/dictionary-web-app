import React, { useState, useEffect, createContext } from "react";

import fontOptions from "./fontOptions";

export const FontContext = createContext(fontOptions[0].type);

/* eslint-disable react/prop-types */

const FontContextWrapper = ({ children }) => {
  const [font, setFont] = useState(
    JSON.parse(localStorage.getItem("font")) || fontOptions[0].type
  );

  useEffect(() => {
    const currentFont = JSON.parse(localStorage.getItem("font"));
    if (currentFont) {
      setFont(currentFont);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(font));
  }, [font]);

  const handleFontChange = (event) => {
    setFont(event.target.value);
  };

  return (
    <FontContext.Provider value={{ font, fontOptions, handleFontChange }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontContextWrapper;
