import React from 'react';

import styled from 'styled-components';


const Table = props => {


    let body = props.dadosvalor.map((item) =>

        <tr key={item.id}>
            <td>{item.ap_name}</td>
            <td>{item.total}</td>
            <td>{item.WaitSend}</td>
            <td>{item.Delivered}</td>
            <td>{item.bounce}</td>
            <td>{item.complaint}</td>
        </tr>);

    return (
        <table>
            <tr>
                <th>APP</th>
                <th>Total</th>
                <th>Aguardando Envio</th>
                <th>Entregues</th>
                <th>Bounce Sofridos</th>
                <th>Bounce Evitados</th>
                <th> {props.Delivered}</th>
            </tr>
            {body}
        </table>


    );
    
};
    const Container = styled.div`
    
    width: 600px;
    height: 600px;
    background-color:blue;
    left-paddin10px;
  
    `;


const Tableposition = (props) => {

    return (
        <Container>
            
            <Table dadosvalor={props.dadosvalor} />

        </Container>


        

    );


};


export default Tableposition;