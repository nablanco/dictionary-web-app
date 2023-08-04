import React from "react";

import NullResult from "./api_results/nullresult";
import EmptySearch from "./api_results/emptysearch";
import GoodResult from "./api_results/goodresult";
import BadResult from "./api_results/badresult";

/* eslint-disable react/prop-types */

const SearchResult = ({ emptySearch, data }) => {
  if (emptySearch) {
    return <EmptySearch />;
  }
  if (!data) {
    return <NullResult />;
  }
  if (data.title) {
    return <BadResult />;
  }

  return <GoodResult data={data} />;
};

export default SearchResult;
