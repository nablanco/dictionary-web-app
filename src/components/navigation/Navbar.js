import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../contexts/theme/themeContext";
import logo from "../../assets/images/logo.svg";
import FontDropDown from "./FontDropDown";
import ThemeSlider from "./ThemeSlider";

const StyledNavbar = styled.div`
  width: 737px;
  margin-top: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div``;
const Logo = styled.img``;
const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Divider = styled.div`
  height: 32px;
  width: 1px;
  margin-right: 26px;
  background-color: ${(props) => props.theme.divider};
`;

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledNavbar>
      <LeftContainer>
        <Logo src={logo} />
      </LeftContainer>
      <RightContainer>
        <FontDropDown />
        <Divider theme={theme} />
        <ThemeSlider />
      </RightContainer>
    </StyledNavbar>
  );
};

export default Navbar;
