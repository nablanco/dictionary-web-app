import React, { useContext } from "react";
import styled from "styled-components";

import WordContainer from "./success_components/WordContainer";
import { ThemeContext } from "../../../contexts/theme/themeContext";

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

const SuccessResult = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledSuccessResult theme={theme}>
      <WordContainer data={data} />
    </StyledSuccessResult>
  );
};

export default SuccessResult;
