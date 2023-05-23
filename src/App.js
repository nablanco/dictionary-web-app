import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { FontContext } from "./contexts/font/fontContext";
import Navbar from "./components/navigation/Navbar";
import Body from "./components/body/Body";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
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
  return (
    <>
      <GlobalStyle font={font} />
      <StyledApp>
        <Navbar />
        <Body />
      </StyledApp>
    </>
  );
}

export default App;
