import React from "react";
import styled from "styled-components";

import logo from "../../assets/images/logo.svg";
import FontDropDown from "./FontDropDown";

const StyledNavbar = styled.div`
  width: 737px;
  display: flex;
  justify-content: space-between;
`;
const LeftContainer = styled.div``;
const Logo = styled.img``;
const RightContainer = styled.div``;

const Navbar = () => {
  return (
    <StyledNavbar>
      <LeftContainer>
        <Logo src={logo} />
      </LeftContainer>
      <RightContainer>
        <FontDropDown />
      </RightContainer>
    </StyledNavbar>
  );
};

export default Navbar;
