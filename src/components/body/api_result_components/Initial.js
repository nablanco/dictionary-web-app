import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../../contexts/theme/themeContext";

const StyledInitialResult = styled.div`
  margin-top: 132px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
const HappyFaceIcon = styled.div`
  font-size: 64px;
`;
const Header = styled.div`
  margin-top: 44px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme.color.header};
`;

const InitialResult = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledInitialResult>
      <HappyFaceIcon>😀</HappyFaceIcon>
      <Header theme={theme}>Hello There! Search For Any Word!</Header>
    </StyledInitialResult>
  );
};

export default InitialResult;
