import React from 'react';
import { MitteLogo } from './mitte_pro_white';
import styled from 'styled-components';

const NavStyled = styled.nav`
  height: 40px;
  background-color: #93b9e2;
  padding: 5px;
`;

const Header = () => {
  return (
    <NavStyled>
      <MitteLogo />
    </NavStyled>
  );
};

export default Header;
