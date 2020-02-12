import React from 'react';

import styled from 'styled-components';

const Table = props => {
  let body = props.dadosvalor.map(item => (
    <tr key={item.id} style={{ color: 'green' }}>
      <td>{item.ap_name}</td>
      <td>{item.total}</td>
      <td>{item.WaitSend}</td>
      <td>{item.Delivered}</td>
      <td>{item.bounce}</td>
      <td>{item.complaint}</td>
    </tr>
  ));

  return (
    <table>
      <tr
        style={{
          fontFamily: 'OpenSans-Regular',
          fontSize: '20px',
          backgroundColor: '#483D8B',
          color: 'white'
        }}
      >
        <th>APP</th>
        <th>Total</th>
        <th>Aguardando Envio</th>
        <th>Entregues</th>
        <th>Bounce Sofridos</th>
        <th>Bounce Evitados</th>
      </tr>
      {body}
    </table>
  );
};

const TableHead = styled.div`
  font-family: OpenSans-Regular;
  font-size: 18px;
  color: #dd008f;
  line-height: 1.2;
  font-weight: unset;
`;

const Container = styled.div`
  width: 800px;
  height: 410px;
  position: relative;
  display: flex;
  padding: 5px;
`;
//   top: -660px;
//   left: 400px;

const Tableposition = props => {
  return (
    <Container>
      <Table dadosvalor={props.dadosvalor} />
    </Container>
  );
};

export default Tableposition;
