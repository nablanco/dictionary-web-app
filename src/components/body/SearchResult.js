import React from "react";
import styled from "styled-components";

const StyledSearchResult = styled.div`
  display: flex;
  justify-content: center;
  color: white;

  @media screen and (max-width: 817px) {
    margin: 0 40px;
  }

  @media screen and (max-width: 425px) {
    margin: 0 24px;
  }
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
