import { flipInX } from 'react-animations';

import styled, { keyframes } from 'styled-components';
const bounceAnimation = keyframes`${flipInX}`;

const BouncyDiv = styled.div`
  animation: ${props =>{

     console.log('flix',props.animation)
    if(props.animation)
      return '1s'
    return '0s'  
  }} ${bounceAnimation};
`;

export default BouncyDiv;
