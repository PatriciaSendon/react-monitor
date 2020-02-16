import React, { useState } from 'react';
import ApiService from '../useful/ServiceApi'

import styled from 'styled-components';

const Table = props => {

   
const [dados,setdados]=useState([]);


  
  //const data = await reponse.Json();



  let body = dados.map((item,index) => (
    <tr key={index} style={{ color: 'green' }}>
      <td>{item}</td>
    
    </tr>
  ));

  return (
    <table>
      <div></div>

      <tr
        style={{
          fontFamily: 'OpenSans-Regular',
          fontSize: '20px',
          backgroundColor: '#483D8B',
          color: 'white'
        }}
      >
        <th>APP</th>
       
      </tr>
      {body}
    </table>
  );
};

// const TableHead = styled.div`
//   font-family: OpenSans-Regular;
//   font-size: 18px;
//   color: #dd008f;
//   line-height: 1.2;
//   font-weight: unset;
// `;

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
