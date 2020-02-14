import { pulse } from 'react-animations';

import styled, { keyframes } from 'styled-components';
const PulseAnimation = keyframes`${pulse}`;

const PulseyDiv = styled.div`
  animation: 1s ${PulseAnimation};
`;

export default PulseyDiv;
