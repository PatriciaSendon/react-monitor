import { flipInX } from 'react-animations';

import styled, { keyframes } from 'styled-components';
const bounceAnimation = keyframes`${flipInX}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

export default BouncyDiv;
