import React, { useContext, useState } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../contexts/theme/themeContext";
import iconMoon from "../../assets/images/icon-moon.svg";

const StyledThemeSlider = styled.div`
  width: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const Switch = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Slider = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  background-color: ${(props) => props.theme.bgcolor.themeslider};
  border-radius: 10px;
  transition: 0.3s all;

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    border-radius: 50%;
    background-color: white;
    transform: translateX(0);
    transition: 0.3s all;
  }
`;
const Checkbox = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + ${Slider} {
    &:before {
      transform: translateX(20px);
    }
  }
`;
const ThemeIcon = styled.img`
  width: 18px;
  height: 18px;
  filter: ${(props) => props.theme.bgcolor.themeicon};
`;

const ThemeSlider = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);

  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
    handleThemeChange();
  };
  return (
    <StyledThemeSlider>
      <Switch>
        <Checkbox
          type="checkbox"
          checked={checked}
          onChange={handleCheckedChange}
        />
        <Slider theme={theme} />
      </Switch>
      <ThemeIcon src={iconMoon} theme={theme} />
    </StyledThemeSlider>
  );
};

export default ThemeSlider;
