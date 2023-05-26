import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { FontContext } from "./contexts/font/fontContext";
import { ThemeContext } from "./contexts/theme/themeContext";
import Navbar from "./components/navigation/Navbar";
import Body from "./components/body/Body";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: ${(props) => props.font.font}, ${(props) => props.font.type};
    background-color: ${(props) => props.theme.bgcolor.main};
  }
`;
const StyledApp = styled.div`
  width: 100%;
  margin: 0px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

function App() {
  const { font } = useContext(FontContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <GlobalStyle font={font} theme={theme} />
      <StyledApp>
        <Navbar />
        <Body />
      </StyledApp>
    </>
  );
}

export default App;
