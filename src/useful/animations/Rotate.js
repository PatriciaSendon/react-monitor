import { rotateIn } from 'react-animations';

import styled, { keyframes } from 'styled-components';
const rotateAnimation = keyframes`${rotateIn}`;

const RotateDiv = styled.div`
  animation: 1s ${rotateAnimation};
`;

export default RotateDiv;
