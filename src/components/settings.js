import React from 'react';

import styled from 'styled-components';

const cardConfigStyle = styled.div`
  box-shadow: 1px 1px 5px rgba(184, 177, 184, 1);
  border-radius: 4px;
  width: 200px;
  height: 200px;
  margin: 20px;
  color: red;
  padding-bottom: '10px';
`;

const CardConfig = () => {
  return (
    <cardConfigStyle>
      <h1>jajajaj</h1>
    </cardConfigStyle>
  );
};
export default CardConfig;
