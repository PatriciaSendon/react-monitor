import styled from 'styled-components';

export const CardStyled = styled.div`
  box-shadow: 1px 1px 5px rgba(184, 177, 184, 1);
  border-radius: 4px;
  width: 175px;
  height: 90px;
  margin: 20px;
  color: White;
  background-color: ${props => props.color};
  display: grid;
  padding-bottom: '10px';

  grid-template-columns: ${props => props.coluns};
  grid-template-rows: 25% 25% 25% 25%;
  padding: 10px;
`;

export const IconPosition = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 4;
  grid-row-end: 4;
`;

export const QtdEmail = styled.div`
  grid-column-start: ${props => props.start};
  grid-column-end: ${props => props.end};
  grid-row-start: 1;
  grid-row-end: 4;
  text-align: right;
  font-size: 0.7rem;
  padding-top: 12px;
  fontsize: '40px';
`;

export const TextPosition = styled.div`
  grid-column-start: ${props => props.textPositionStart};
  grid-column-end: ${props => props.textPositionStart};
  grid-row-start: 4;
  grid-row-end: 4;
  text-align: right;
  font-size: 0.7rem;
  padding-top: 8px;
  fontsize: '40px';
`;

export const Hposition = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  font-size: 0.7 rem;
`;
