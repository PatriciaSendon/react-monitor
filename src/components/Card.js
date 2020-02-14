import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import FlipInx from '../useful/animations/FlipInx';

const CardStyled = styled.div`
  box-shadow: 1px 1px 5px rgba(184, 177, 184, 1);
  border-radius: 4px;
  width: 155px;
  height: 70px;
  margin: 20px;
  color: White;
  background-color: ${props => props.color};
  display: grid;
  padding-bottom:'10px';

  grid-template-columns: ${props => props.coluns};
  grid-template-rows: 25% 25% 25% 25%;
  padding: 10px;
`;

const IconPosition = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 4;
  grid-row-end: 4;
`;

const QtdEmail = styled.div`
  grid-column-start:  ${props=>props.start};
  grid-column-end: ${props=>props.end};
  grid-row-start: 1;
  grid-row-end: 4;
  text-align: right;
  font-size: 0.7rem;
  padding-top: 12px;
  fontsize: '40px';
`;

const TextPosition = styled.div`
  grid-column-start:  ${props=>props.textPositionStart};
  grid-column-end: ${props=>props.textPositionStart};
  grid-row-start: 4;
  grid-row-end: 4;
  text-align: right;
  font-size: 0.7rem;
  padding-top: 8px;
  fontsize: '40px';

`;

const Hposition = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  font-size: 0.7 rem;
`;

const Card = props => {
  let coluns = ''
  let positionStart = ''
  let positionEnd = ''
  let textPositionStart=''
  


  if (props.card.value > 99) {
    coluns = '20% 20% 20% 20% 20%';
    positionStart = '4'
    positionEnd = '5'
    textPositionStart='5'
    
  }
  else {
    coluns = '33.3% 33.3% 33.3%';
    positionStart = '3'
    positionEnd = '4'
    textPositionStart='3'
    
  }



return (
  <div style={{ display: 'inline' }} key={props.header}>
    <FlipInx>
      <CardStyled color={props.card.color} coluns={coluns}>
        <Hposition>{props.card.header}</Hposition>
        <IconPosition>
          {props.card.type ? (
            <Icon type={props.card.type} />
          ) : (
              <i className={props.card.iconClass} />
            )}
        </IconPosition>
        <QtdEmail start={positionStart} end={positionEnd}>

          <div style={{ fontSize: '40px' }}>{props.card.value}</div>

        </QtdEmail>
          <TextPosition textPositionStart={textPositionStart} >Emails</TextPosition>
      </CardStyled>
    </FlipInx>

  </div>
);
};

export default Card;

