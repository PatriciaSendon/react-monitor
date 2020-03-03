import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`${{
  from: {
    transformOrigin: 'center',
    transform: 'rotate3d(0, 0, 1, -180deg)'
  },
  to: {
    transformOrigin: 'center',
    transform: 'none'
  }
}}
    `;

const RotateDiv = styled.div`
  animation: 1s ${rotateAnimation};
`;

export default RotateDiv;
