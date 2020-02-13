import React from 'react';
import { MitteLogo } from './mitte_pro_white';
import styled from 'styled-components';

const NavStyled = styled.nav`
  height: 40px;
  background-color: #2684ff;
  padding: 5px;
  box-shadow: 0px 1px 5px 1px lightgrey;
`;

const Header = () => {
  return (
    <NavStyled>
      <MitteLogo />
    </NavStyled>
  );
};

export default Header;
