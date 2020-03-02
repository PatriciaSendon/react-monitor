import React, { Fragment, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';

import { Dropdown, Icon } from 'antd';
import CardConfig from './settings';
import RotateDiv from '../../useful/animations/Rotate';
import SlideInDownDiv from '../../useful/animations/SlideIndown';

const MenuConfig = ({
  controlAnimationTable,
  controlAnimationCard,
  stateSelector,
  controlRefreshTime,
  stateSwitchTable,
  stateSwitchCard,
  refreshValue
}) => {
  const [menu, setMenu] = useState(false);

  const menus = (
    <Fragment>
      <SlideInDownDiv>
        {menu ? (
          <CardConfig
            controlAnimationTable={controlAnimationTable}
            controlAnimationCard={controlAnimationCard}
            controlRefreshTime={controlRefreshTime}
            stateSelector={stateSelector}
            stateSwitchTable={stateSwitchTable}
            stateSwitchCard={stateSwitchCard}
            refreshValue={refreshValue}
          />
        ) : null}
      </SlideInDownDiv>
    </Fragment>
  );

  return (
    <Fragment>
      <RotateDiv key={menu}>
        <Dropdown
          visible={true}
          overlayStyle={{
            position: 'absolute',
            maxWidth: '200px'
          }}
          overlay={menus}
          trigger={['click']}
        >
          <IconButton
            className="ant-dropdown-link"
            onClick={() => setMenu(!menu)}
          >
            <Icon type="setting" style={{ color: 'white' }} />
          </IconButton>
        </Dropdown>
      </RotateDiv>
    </Fragment>
  );
};

export default MenuConfig;
