import React from "react";
import styled from "styled-components";

const StyledSearchResult = styled.div`
  display: flex;
`;

/* eslint-disable react/prop-types */

const SearchResult = ({ data }) => {
  return (
    <StyledSearchResult>
      {data.title ? data.title : data[0].word}
    </StyledSearchResult>
  );
};

export default SearchResult;
