import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const StyledBody = styled.div``;

const Body = () => {
  return (
    <StyledBody>
      <SearchBar />
      <SearchResult />
    </StyledBody>
  );
};

export default Body;
