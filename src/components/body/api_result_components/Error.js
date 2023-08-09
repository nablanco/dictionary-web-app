import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../../contexts/theme/themeContext";

const StyledErrorResult = styled.div`
  margin-top: 132px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
const SadFaceIcon = styled.div`
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
const Body = styled.div`
  margin-top: 24px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: ${(props) => props.theme.color.subheader};
`;

const ErrorResult = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledErrorResult>
      <SadFaceIcon>😕</SadFaceIcon>
      <Header theme={theme}>No Definitions Found</Header>
      <Body theme={theme}>
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </Body>
    </StyledErrorResult>
  );
};

export default ErrorResult;
