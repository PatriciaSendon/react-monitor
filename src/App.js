import React, { Fragment } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Table from './components/Table';


function App() {



 const datatable = [
    {
      "ap_id": 1,
      "ap_name": "App de Teste do Thiago Aumentando o Nome",
      "total": "32",
      "waitSend": "4",
      "waitDelivery": "4",
      "Delivered": "24",
      "bounce": "0",
      "complaint": "0"
    },
    {
      "ap_id": 2,
      "ap_name": "Aapp2",
      "total": "32",
      "waitSend": "4",
      "waitDelivery": "4",
      "Delivered": "24",
      "bounce": "0",
      "complaint": "0"
    },
    {
      "ap_id": 3,
      "ap_name": "app3",
      "total": "3asa",
      "waitSend": "qwq",
      "waitDelivery": "qwqw4",
      "Delivered": "2sds",
      "bounce": "sdsd",
      "complaint": "sdds"
    }
  ]

  return (
    <Fragment>
      <Header />
      <Card type="mail" color={'#a08365'} header={'Total'} valor={74} />


      <Card
        iconClass="fa fa-paper-plane-o"
        color={'#22A7F0'}
        header={'Enviados'}
        valor={10}
      />

      <Card
        type="clock-circle"
        color={'#8a6dd5'}
        header={'Aguardando Envio'}
        valor={16}
      />
      <Card type="check" color={'#1ABC9C'} header={'Entregues'} valor={88} />
      <Card
        iconClass="fa fa-exclamation-triangle"
        color={'#FF0000'}
        header={'Bounce Sofridos'}
        valor={59}
      />
      <Card
        type="alert"
        color={'#ffb400'}
        header={'Bounce Evitados'}
        valor={23}
      />
      <Table dadosvalor={datatable} />
    </Fragment >
  );
}

export default App;
