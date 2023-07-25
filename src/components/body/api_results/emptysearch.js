import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../contexts/theme/themeContext";

const StyledEmptySearch = styled.div`
  color: ${(props) => props.theme.color.red};
  margin-top: 8px;
`;

const EmptySearch = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledEmptySearch theme={theme}>
      Whoops, can&apos;t be empty...
    </StyledEmptySearch>
  );
};

export default EmptySearch;
