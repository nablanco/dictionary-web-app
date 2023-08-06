import React from "react";

import InitialResult from "./api_result_components/Initial";
import EmptyResult from "./api_result_components/Empty";
import SuccessResult from "./api_result_components/Success";
import ErrorResult from "./api_result_components/Error";

/* eslint-disable react/prop-types */

const SearchResult = ({ emptySearch, data }) => {
  if (emptySearch) {
    return <EmptyResult />;
  }
  if (!data) {
    return <InitialResult />;
  }
  if (data.title) {
    return <ErrorResult />;
  }

  return <SuccessResult data={data} />;
};

export default SearchResult;
