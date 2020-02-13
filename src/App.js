import React, { Fragment } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Template from './components/Template';
import TableStyle from './components/TableStyle';
import getUser from './useful/ServiceApi';

function App() {
  const datatable = [
    {
      ap_id: 1,
      ap_name: 'App de Teste do Thiago Aumentando o Nome',
      total: '32',
      waitSend: '4',
      waitDelivery: '4',
      Delivered: '24',
      bounce: '0',
      complaint: '9'
    },
    {
      ap_id: 2,
      ap_name: 'Aapp2',
      total: '32',
      waitSend: '4',
      waitDelivery: '4',
      Delivered: '24',
      bounce: '665',
      complaint: '43'
    },
    {
      ap_id: 3,
      ap_name: 'app3',
      total: '3asa',
      waitSend: 'qwq',
      waitDelivery: 'qwqw4',
      Delivered: '2sds',
      bounce: 'sdsd',
      complaint: 'sdds'
    },
    {
      ap_id: 5,
      ap_name: 'app3',
      total: '3asa',
      waitSend: 'qwq',
      waitDelivery: 'qwqw4',
      Delivered: '2sds',
      bounce: 'sdsd',
      complaint: 'sdds'
    },
    {
      ap_id: 6,
      ap_name: 'app3',
      total: '3asa',
      waitSend: 'qwq',
      waitDelivery: 'qwqw4',
      Delivered: '2sds',
      bounce: 'sdsd',
      complaint: 'sdds'
    },
    {
      ap_id: 7,
      ap_name: 'app3',
      total: '3asa',
      waitSend: 'qwq',
      waitDelivery: 'qwqw4',
      Delivered: '2sds',
      bounce: 'sdsd',
      complaint: 'sdds'
    },
    {
      ap_id: 34,
      ap_name: 'app3',
      total: '3asa',
      waitSend: 'qwq',
      waitDelivery: 'qwqw4',
      Delivered: '2sds',
      bounce: 'sdsd',
      complaint: 'sdds'
    },
    {
      ap_id: 344,
      ap_name: 'app3',
      total: '3asa',
      waitSend: 'qwq',
      waitDelivery: 'qwqw4',
      Delivered: '2sds',
      bounce: 'sdsd',
      complaint: 'sdds'
    },
    {
      ap_id: 3444,
      ap_name: 'app3',
      total: '3asa',
      waitSend: 'qwq',
      waitDelivery: 'qwqw4',
      Delivered: '2sds',
      bounce: 'sdsd',
      complaint: 'sdds'
    },
    {
      ap_id: 36664,
      ap_name: 'app3',
      total: '3asa',
      waitSend: 'qwq',
      waitDelivery: 'qwqw4',
      Delivered: '2sds',
      bounce: 'sdsd',
      complaint: 'sdds'
    }
  ];

  const cards = [
    {
      value: '99',
      color: '#a08365',
      type: 'mail',
      header: 'Total'
    },
    {
      value: '32',
      color: '#8a6dd5',
      type: 'clock-circle',
      header: 'Aguardando Envio'
    },
    {
      value: '318',
      color: '#22A7F0',
      iconClass: 'fa fa-paper-plane-o',
      header: 'Enviados'
    },
    {
      value: '325',
      color: '#1ABC9C',
      type: 'check',
      header: 'Entregues'
    },
    {
      value: '342',
      color: '#FF0000',
      iconClass: 'fa fa-exclamation-triangle',
      header: 'Bounce Sofridos'
    },
    {
      value: '302',
      color: '#ffb400',
      type: 'alert',
      header: 'Bounce Evitados'
    }
  ];

  const teste = async () => {
    const t = await getUser();
    console.log(t);
  };

  teste();
  return (
    <Fragment>
      <Header />
      <Template
        cards={cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
        tabela={<TableStyle dataValue={datatable} />}
      />
    </Fragment>
  );
}

export default App;
