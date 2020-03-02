import { slideInRight } from 'react-animations';

import styled, { keyframes } from 'styled-components';
const slideInDownAnimation = keyframes`${slideInRight}`;

const SlideInDownDiv = styled.div`
  animation: 1s ${slideInDownAnimation};
`;

export default SlideInDownDiv;
