import React, { Fragment, useState } from 'react';
import { Dropdown, Icon } from 'antd';
import CardConfig from './settings';

const MenuConfig = () => {
  const [menu, setMenu] = useState(true);

  const menus = <Fragment>{menu ? <CardConfig /> : null}</Fragment>;

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
        <div className="ant-dropdown-link" onClick={() => setMenu(!menu)}>
          <Icon type="setting" style={{ color: 'white' }} />
        </div>
      </Dropdown>
    </Fragment>
  );
};

export default MenuConfig;
