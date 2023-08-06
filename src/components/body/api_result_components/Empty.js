import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../contexts/theme/themeContext";

const StyledEmptyResult = styled.div`
  color: ${(props) => props.theme.color.red};
  margin-top: 8px;
`;

const EmptyResult = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledEmptyResult theme={theme}>
      Whoops, can&apos;t be empty...
    </StyledEmptyResult>
  );
};

export default EmptyResult;
