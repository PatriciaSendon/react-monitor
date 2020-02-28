import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

export default function SelectComponent({
  controlRefreshTime,
  stateSelector,
  refreshValue
}) {
  return (
    <Select
      style={{
        width: '55px',
        fontSize: '15px',
        borderRadius: '4px',
        backgroundColor: '#f4f4f4'
      }}
      disabled={stateSelector}
      onChange={controlRefreshTime}
      defaultValue={'1'}
      value={refreshValue}
    >
      <Option value="1">1</Option>
      <Option value="2">2</Option>
      <Option value="3">3</Option>
      <Option value="7">7</Option>
      <Option value="10">10</Option>
    </Select>
  );
}
