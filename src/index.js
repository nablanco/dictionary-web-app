import React from "react";
import ReactDOM from "react-dom/client";

import FontContextWrapper from "./contexts/font/fontContext";
import ThemeContextWrapper from "./contexts/theme/themeContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FontContextWrapper>
      <ThemeContextWrapper>
        <App />
      </ThemeContextWrapper>
    </FontContextWrapper>
  </React.StrictMode>
);
