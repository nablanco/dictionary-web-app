import React, { useState } from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const StyledBody = styled.div`
  width: 737px;
  margin-top: 59px;

  @media screen and (max-width: 817px) {
    width: 100%;
  }
`;

const Body = () => {
  const [userInput, setUserInput] = useState("");
  const [emptySearch, setEmptySearch] = useState(false);
  const [data, setData] = useState(null);

  const handleQuery = async () => {
    if (userInput.trim() == "") {
      setEmptySearch(true);
    }

    setEmptySearch(false);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput.trim()}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error searching dictionary: ", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleQuery();
    }
  };
  return (
    <StyledBody>
      <SearchBar
        userInput={userInput}
        setInput={setUserInput}
        handleQuery={handleQuery}
        handleKeyPress={handleKeyPress}
      />
      {console.log("userInput: ", userInput)}
      {console.log("data: ", data)}
      <SearchResult emptySearch={emptySearch} data={data} />
    </StyledBody>
  );
};

export default Body;
