import { pulse } from 'react-animations';

import styled, { keyframes } from 'styled-components';
const PulseAnimation = keyframes`${pulse}`;

const PulseyDiv = styled.div`
  animation: ${props => {
    if(props.animation)
     return '1s'
    return '0s'
  } }
    
     ${PulseAnimation};
`;

export default PulseyDiv;
