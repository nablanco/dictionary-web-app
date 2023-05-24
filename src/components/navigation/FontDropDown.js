import React, { useContext } from "react";
import styled from "styled-components";

import { FontContext } from "../../contexts/font/fontContext";

const StyledFontDropDown = styled.label`
  display: inline-block;
`;

const DropDownOptions = styled.select``;
const DropDownOption = styled.option`
  color: black;
  cursor: pointer;
`;

const FontDropDown = () => {
  const { font, fontOptions, handleFontChange } = useContext(FontContext);

  return (
    <StyledFontDropDown>
      <DropDownOptions value={font.type} onChange={handleFontChange}>
        {fontOptions.map((option) => {
          return (
            <DropDownOption value={option.type} key={option.type}>
              {option.type}
            </DropDownOption>
          );
        })}
      </DropDownOptions>
    </StyledFontDropDown>
  );
};

export default FontDropDown;
