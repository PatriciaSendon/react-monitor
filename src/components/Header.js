import React from 'react';
import { MitteLogo } from './mitte_pro_white';
import styled from 'styled-components';
import MenuConfig from './menuConfig/configMenu';
import PlayButton from './buttons/startButtons';
import StopButton from './buttons/stopButtons';
import RotateDiv from '../useful/animations/Rotate';

const NavStyled = styled.nav`
  background-color: #1961bf;
  padding: 5px;
  box-shadow: 0px 1px 5px 1px lightgrey;
`;

const Header = ({
  controlAnimationTable,
  controlAnimationCard,
  controlRefreshTime,
  startFetch,
  stateSelector,
  startButtonState,
  stopFetch,
  stopButtonState,
  stateSwitchTable,
  stateSwitchCard,
  refreshValue
}) => {
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
          float: 'right',
          display: 'inline-block'
        }}
      >
        <RotateDiv>
          <MenuConfig
            controlAnimationTable={controlAnimationTable}
            controlAnimationCard={controlAnimationCard}
            controlRefreshTime={controlRefreshTime}
            stateSelector={stateSelector}
            stateSwitchTable={stateSwitchTable}
            stateSwitchCard={stateSwitchCard}
            refreshValue={refreshValue}
          />
        </RotateDiv>
      </div>
      <div
        style={{
          float: 'right',
          display: 'inline-block'
        }}
      >
        <StopButton stopButtonState={stopButtonState} stopFetch={stopFetch} />
      </div>
      <div
        style={{
          float: 'right',
          display: 'inline-block'
        }}
      >
        <PlayButton
          startButtonState={startButtonState}
          startFetch={startFetch}
        ></PlayButton>
      </div>
    </NavStyled>
  );
};

export default Header;
