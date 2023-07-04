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
  const [data, setData] = useState(null);

  const handleFetch = async (formJSON) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${formJSON.usersearch}`
      );
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log("Error searching dictionary: ", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());

    handleFetch(formJSON);
  };

  return (
    <StyledBody>
      <SearchBar handleSearch={handleSearch} />
      <SearchResult data={data} />
    </StyledBody>
  );
};

export default Body;
