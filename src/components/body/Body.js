import React, { useContext, useState } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../contexts/theme/themeContext";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const StyledBody = styled.div`
  width: 737px;
  margin-top: 59px;
  color: ${(props) => props.theme.color.header};

  @media screen and (max-width: 817px) {
    width: 100%;
  }
`;
const StyledSearchResult = styled(SearchResult)`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 817px) {
    margin: 0 40px;
  }

  @media screen and (max-width: 425px) {
    margin: 0 24px;
  }
`;

const Body = () => {
  const [userInput, setUserInput] = useState("");
  const [emptySearch, setEmptySearch] = useState(false);
  const [data, setData] = useState(null);
  const { theme } = useContext(ThemeContext);

  const handleQuery = async () => {
    if (userInput.trim() == "") {
      setEmptySearch(true);
      return;
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
    <StyledBody theme={theme}>
      <SearchBar
        userInput={userInput}
        setInput={setUserInput}
        handleQuery={handleQuery}
        handleKeyPress={handleKeyPress}
      />
      <StyledSearchResult emptySearch={emptySearch} data={data} />
    </StyledBody>
  );
};

export default Body;
