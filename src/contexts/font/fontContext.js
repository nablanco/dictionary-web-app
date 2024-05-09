import React, { useState, useEffect, createContext } from "react";

import fontOptions from "./fontOptions";

export const FontContext = createContext(fontOptions[0].type);

/* eslint-disable react/prop-types */

const FontContextWrapper = ({ children }) => {
  const [font, setFont] = useState(
    JSON.parse(localStorage.getItem("font-dictionaryApp")) || fontOptions[0]
  );

  useEffect(() => {
    const currentFont = JSON.parse(
      localStorage.getItem("fofont-dictionaryAppnt")
    );
    if (currentFont) {
      setFont(currentFont);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("font-dictionaryApp", JSON.stringify(font));
  }, [font]);

  const handleFontChange = (targetFont) => {
    let fontIndex = fontOptions.findIndex(
      (fontObject) => fontObject.type == targetFont
    );
    setFont(fontOptions[fontIndex]);
  };

  return (
    <FontContext.Provider value={{ font, fontOptions, handleFontChange }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontContextWrapper;
