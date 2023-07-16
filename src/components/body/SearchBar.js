import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../contexts/theme/themeContext";
import { FontContext } from "../../contexts/font/fontContext";
import iconSearch from "../../assets/images/icon-search.svg";

const StyledSearchBar = styled.div`
  height: 64px;
  display: flex;
  border-radius: 16px;
  background-color: ${(props) => props.theme.bgcolor.searchbar};
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 817px) {
    margin: 0 40px;
  }

  @media screen and (max-width: 425px) {
    margin: 0 24px;
  }
`;
const SearchInput = styled.input`
  flex-grow: 1;
  height: 100%;
  margin: 0px;
  margin-left: 24.45px;
  padding: 0px;
  font-family: ${(props) => props.font};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme.color.header};
  background-color: transparent;
  outline: none;
  border: none;

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;
const SearchButton = styled.button`
  margin: 0px;
  margin-right: 24.45px;
  border: none;
  padding: 0px;
  background-color: transparent;
  cursor: pointer;
`;
const SearchIcon = styled.img`
  width: 15.6px;
  height: 15.6px;
`;

/* eslint-disable react/prop-types */

const SearchBar = ({ userInput, setInput, handleQuery, handleKeyPress }) => {
  const { theme } = useContext(ThemeContext);
  const { font } = useContext(FontContext);

  return (
    <StyledSearchBar theme={theme}>
      <SearchInput
        type="text"
        value={userInput}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        theme={theme}
        font={font}
        placeholder="Search for any word..."
        autocomplete="off"
      />
      <SearchButton type="submit" onClick={handleQuery}>
        <SearchIcon src={iconSearch} />
      </SearchButton>
    </StyledSearchBar>
  );
};

export default SearchBar;
