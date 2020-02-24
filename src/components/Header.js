import React from 'react';
import { MitteLogo } from './mitte_pro_white';
import styled from 'styled-components';
import MenuConfig from './menuConfig/configMenu'




const NavStyled = styled.nav`
  height: 40px;
  background-color: #1961bf;
  padding: 5px;
  box-shadow: 0px 1px 5px 1px lightgrey;
`;

const Header = ({controlAnimationTable,controlAnimationCard}) => {
  return (
    <NavStyled>
      <div className={'LogoConteiner'} style={{ display: 'inline-block' }}>
        <div
          className={'logo'}
          style={{ marginLeft: '10px', display: 'inline' }}
        >
          <MitteLogo />
        </div>
      </div>
      <div
        style={{
          padding: '13px',
          float: 'right',
          display: 'inline-block'
        }}
      >
        <MenuConfig controlAnimationTable={controlAnimationTable} controlAnimationCard={controlAnimationCard} />
       
      </div>
    </NavStyled>
  );
};

export default Header;
