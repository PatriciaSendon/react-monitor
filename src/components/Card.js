import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const CardStyled = styled.div`
  box-shadow: 1px 1px 5px rgba(184, 177, 184, 1);
  border-radius: 4px;
  width: 140px;
  height: 70px;
  margin: 20px;
  color: White;
  background-color: ${props => props.color};
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
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
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
  text-align: right;
  font-size: 0.7rem;
  padding-top: 12px;
`;

const Hposition = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  font-size: 0.7 rem;
`;

const Card = props => {
  return (
    <div style={{ display: 'inline' }}>
      <CardStyled color={props.color}>
        <Hposition>{props.header}</Hposition>
        <IconPosition>
          {props.type ? (
            <Icon type={props.type} />
          ) : (
            <i className={props.iconClass} />
          )}
        </IconPosition>
        <QtdEmail>
          <div style={{ fontSize: '40px' }}>{props.valor}</div>
          <div>Emails</div>
        </QtdEmail>
      </CardStyled>
    </div>
  );
};

export default Card;
