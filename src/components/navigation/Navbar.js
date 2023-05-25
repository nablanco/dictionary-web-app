import React from "react";
import styled from "styled-components";

import logo from "../../assets/images/logo.svg";
import FontDropDown from "./FontDropDown";

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
  margin-right: 26px;
  border: 1px solid #e9e9e9;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <LeftContainer>
        <Logo src={logo} />
      </LeftContainer>
      <RightContainer>
        <FontDropDown />
        <Divider />
      </RightContainer>
    </StyledNavbar>
  );
};

export default Navbar;
