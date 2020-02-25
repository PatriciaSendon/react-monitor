import React, { Fragment, useState } from 'react';
import { Dropdown, Icon } from 'antd';
import CardConfig from './settings';


import IconButton from '@material-ui/core/IconButton';

const MenuConfig = ({
  controlAnimationTable,
  controlAnimationCard,
  stateSelector,
  controlRefreshTime}) => {
  const [menu, setMenu] = useState(false);

  const menus = <Fragment>{menu ? <CardConfig
     controlAnimationTable = {controlAnimationTable}
     controlAnimationCard = {controlAnimationCard}
     controlRefreshTime = {controlRefreshTime}
     stateSelector={stateSelector}
      /> : null}</Fragment>;

  return (
    <Fragment>
      <Dropdown visible={true}
        overlayStyle={{
          position: 'absolute',
          maxWidth: '200px'
        }}
        overlay={menus}
        trigger={['click']}
      >
        <IconButton className="ant-dropdown-link" onClick={() => setMenu(!menu)}>
          <Icon type="setting" style={{ color: 'white' }} />
        </IconButton>
      </Dropdown>
    </Fragment>
  );
};

export default MenuConfig;
