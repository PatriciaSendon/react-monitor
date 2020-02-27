import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

export default function SelectComponent({ controlRefreshTime, stateSelector }) {
  return (
    <Select
      style={{
        width: '55px',
        fontSize: '15px',
        borderRadius: '4px',
        backgroundColor: '#f4f4f4'
      }}
      onChange={onChange}
    >
      <Option value="1">1</Option>
      <Option value="2">2</Option>
      <Option value="3">3</Option>
      <Option value="4">4</Option>
      <Option value="5">5</Option>
    </Select>
  );
}
