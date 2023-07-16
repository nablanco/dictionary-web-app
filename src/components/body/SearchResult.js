import React from "react";
import styled from "styled-components";

import NullResult from "./api_results/nullresult";
import EmptySearch from "./api_results/emptysearch";
import GoodResult from "./api_results/goodresult";
import BadResult from "./api_results/badresult";

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

const SearchResult = ({ emptySearch, data }) => {
  return (
    <StyledSearchResult>
      {!data ? (
        <NullResult />
      ) : emptySearch == true ? (
        <EmptySearch />
      ) : data.title ? (
        <BadResult />
      ) : (
        <GoodResult data={data} />
      )}
    </StyledSearchResult>
  );
};

export default SearchResult;
