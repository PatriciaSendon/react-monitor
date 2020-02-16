import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import FlipInx from '../useful/animations/FlipInx';
import { useEffect } from 'react';




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
  grid-column-start:  ${props => props.start};
  grid-column-end: ${props => props.end};
  grid-row-start: 1;
  grid-row-end: 4;
  text-align: right;
  font-size: 0.7rem;
  padding-top: 12px;
  fontsize: '40px';
`;

const TextPosition = styled.div`
  grid-column-start:  ${props => props.textPositionStart};
  grid-column-end: ${props => props.textPositionStart};
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

const CaresHook = props => {
  let coluns = ''
  let positionStart = ''
  let positionEnd = ''
  let textPositionStart = ''


  const [dadosMail, setDadosMail] = useState(props);


  if (dadosMail.card.value > 999) {
 
    coluns = '33.3% 33.3% 33.3%';
    positionStart = '2'
    positionEnd = '5'
    textPositionStart = '3'
  }

  else if (dadosMail.card.value > 99) {
    coluns = '20% 20% 20% 20% 20%';
    positionStart = '4'
    positionEnd = '5'
    textPositionStart = '5'
 

  }
    
  else {
    coluns = '33.3% 33.3% 33.3%';
    positionStart = '3'
    positionEnd = '4'
    textPositionStart = '3'

  }

  useEffect(() => {

    setDadosMail(props)

  }, [props]);





  return (
    <div style={{ display: 'inline' }} key={dadosMail.card.header}>
      <FlipInx>
        <CardStyled color={dadosMail.card.color} coluns={coluns}>
          <Hposition>{dadosMail.card.header}</Hposition>
          <IconPosition>
            {dadosMail.card.type ? (
              <Icon type={dadosMail.card.type} />
            ) : (
                <i className={dadosMail.card.iconClass} />
              )}
          </IconPosition>
          <QtdEmail start={positionStart} end={positionEnd}>

            <div style={{ fontSize: '40px' }}>{dadosMail.card.value}</div>

          </QtdEmail>
          <TextPosition textPositionStart={textPositionStart} >Emails</TextPosition>
        </CardStyled>
      </FlipInx>

    </div>
  );
};



export default CaresHook;