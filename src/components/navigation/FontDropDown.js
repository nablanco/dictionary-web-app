import React, { useContext } from "react";
import styled from "styled-components";

import iconArrowDown from "../../assets/images/icon-arrow-down.svg";
import { FontContext } from "../../contexts/font/fontContext";

const StyledFontDropDown = styled.label`
  display: inline-block;
  margin-right: 26px;
`;

const DropDownOptions = styled.select`
  width: 120px;
  height: 24px;
  appearance: none;
  border: none;
  outline: none;
  text-transform: capitalize;
  cursor: pointer;
  font-family: ${(props) => props.font.font}, ${(props) => props.font.type};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  background: url(${(props) => props.photo});
  background-repeat: no-repeat;
  background-position: right 0px top 50%;
  background-size: 12px;
`;
const DropDownOption = styled.option`
  border: none;
  outline: none;
  color: #2d2d2d;
  font-family: ${(props) => props.font.font}, ${(props) => props.font.type};
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
  const { font, fontOptions, handleFontChange } = useContext(FontContext);

  return (
    <StyledFontDropDown>
      <DropDownOptions
        value={font.type}
        onChange={handleFontChange}
        font={font}
        photo={iconArrowDown}
      >
        {fontOptions.map((option) => {
          console.log(iconArrowDown);
          return (
            <DropDownOption value={option.type} key={option.type} font={option}>
              {option.type}
            </DropDownOption>
          );
        })}
      </DropDownOptions>
    </StyledFontDropDown>
  );
};

export default FontDropDown;
