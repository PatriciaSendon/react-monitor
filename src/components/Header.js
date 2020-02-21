import React from 'react';
import { MitteLogo } from './mitte_pro_white';
import styled from 'styled-components';
import MenuConfig from './configMenu';

const NavStyled = styled.nav`
  height: 40px;
  background-color: #1961bf;
  padding: 5px;
  box-shadow: 0px 1px 5px 1px lightgrey;
`;

const Header = () => {
  return (
    <NavStyled>
      <div className={"conteiner"} style={{ display: "inline" }}>


        <div  className={"logoContainer"} style={{ marginLeft: '10px' , display: "inline" }}>
           <MitteLogo />
        </div>

        <div id={"menuContainer"}  className={"menuContainer"} style={{
           display: "inline",
            height:"30px",
             width:"100px",
             marginLeft:"1650px",
             marginTop:"12px",
            
             backgroundColor:"red"
             }}>
               <MenuConfig open={{ open: false }}/>
        </div>
      </div>
     
    </NavStyled>
  );
};

export default Header;
