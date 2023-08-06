import React, { useContext } from "react";
import styled from "styled-components";

import WordContainer from "./success_components/WordContainer";
import { ThemeContext } from "../../../contexts/theme/themeContext";
import { FontContext } from "../../../contexts/font/fontContext";

import testData from "./testData";

const StyledSuccessResult = styled.div`
  margin-top: 45px;
  @media screen and (max-width: 817px) {
    margin: 0px 40px;
    margin-top: 45px;
  }

  @media screen and (max-width: 425px) {
    margin: 0 24px;
    margin-top: 45px;
  }
`;

const SuccessResult = () => {
  const { theme } = useContext(ThemeContext);
  const { font } = useContext(FontContext);

  return (
    <StyledSuccessResult theme={theme} font={font}>
      <WordContainer data={testData} />
    </StyledSuccessResult>
  );
};

export default SuccessResult;
