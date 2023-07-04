import React, { useState, useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../contexts/theme/themeContext";
import iconArrowDown from "../../assets/images/icon-arrow-down.svg";
import { FontContext } from "../../contexts/font/fontContext";

const StyledFontDropDown = styled.div`
  display: inline-block;
  position: relative;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;
const DropDownSelect = styled.div`
  width: 120px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
  color: ${(props) => props.theme.color.header};
  font-family: ${(props) => props.font.font}, ${(props) => props.font.type};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;
const DownArrowImg = styled.img``;
const OptionsContainer = styled.div`
  margin-top: 10.5px;
  padding: 24px 69px 24px 24px;
  position: absolute;
  right: 0px;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 16px;
  color: ${(props) => props.theme.color.header};
  background-color: ${(props) => props.theme.bgcolor.fontOptions};
  box-shadow: 0px 5px 30px ${(props) => props.theme.bgcolor.fontOptionsShadow};
  border-radius: 16px;
`;
const Option = styled.div`
  min-width: 90px;
  font-family: ${(props) => props.font};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: #a445ed;
  }
`;

const FontDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { font, fontOptions, handleFontChange } = useContext(FontContext);
  const { theme } = useContext(ThemeContext);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledFontDropDown>
      <DropDownSelect
        font={font}
        theme={theme}
        onClick={() => toggleDropDown()}
      >
        {font.type}
        <DownArrowImg src={iconArrowDown} />
      </DropDownSelect>
      <OptionsContainer isOpen={isOpen} theme={theme}>
        {fontOptions.map((option) => {
          return (
            <Option
              onClick={() => {
                handleFontChange(option.type);
                toggleDropDown();
              }}
              key={option.type}
              font={option.font}
            >
              {option.type}
            </Option>
          );
        })}
      </OptionsContainer>
    </StyledFontDropDown>
  );
};

export default FontDropDown;
