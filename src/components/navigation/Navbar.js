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

  @media screen and (max-width: 817px) {
    width: 100%;
  }
`;
const LeftContainer = styled.div`
  @media screen and (max-width: 817px) {
    margin-left: 40px;
  }

  @media screen and (max-width: 425px) {
    margin-left: 24px;
  }
`;
const Logo = styled.img``;
const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 817px) {
    margin-right: 40px;
  }

  @media screen and (max-width: 425px) {
    margin-right: 24px;
  }
`;
const Divider = styled.div`
  height: 32px;
  width: 1px;
  margin: 0px 26px;
  background-color: ${(props) => props.theme.divider};

  @media screen and (max-width: 425px) {
    margin: 0px 16px;
  }
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
