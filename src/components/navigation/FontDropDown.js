import React, { useState, useContext } from "react";
import styled from "styled-components";

import { FontContext } from "../../contexts/font/fontContext";
import iconArrowDown from "../../assets/images/icon-arrow-down.svg";

const StyledFontDropDown = styled.div`
  position: relative;
  display: inline-block;
`;
const Button = styled.button`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ButtonImage = styled.img``;
const DropDownOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 183px;
  height: 152px;
  background-color: #fff;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #ccc;
`;
const DropDownOption = styled.div`
  color: black;
  cursor: pointer;
`;

const FontDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { font, fontOptions, handleFontChange } = useContext(FontContext);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledFontDropDown>
      <Button onClick={toggleDropDown}>
        {font}
        <ButtonImage src={iconArrowDown} />
      </Button>
      {isOpen && (
        <DropDownOptions>
          {fontOptions.map((option) => {
            return (
              <DropDownOption
                value={option.type}
                key={option.type}
                onClick={handleFontChange}
              >
                {option.type}
              </DropDownOption>
            );
          })}
        </DropDownOptions>
      )}
    </StyledFontDropDown>
  );
};

export default FontDropDown;
