import React, { Fragment } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Table from './components/Table';
import Template from './components/Template';

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
    }
  ];

  const cards = [
    {
      value: '999',
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
      value: '32',
      color: '#22A7F0',
      iconClass: 'fa fa-paper-plane-o',
      header: 'Enviados'
    },
    {
      value: '32',
      color: '#1ABC9C',
      type: 'check',
      header: 'Entregues'
    },
    {
      value: '32',
      color: '#FF0000',
      iconClass: 'fa fa-exclamation-triangle',
      header: 'Bounce Sofridos'
    },
    {
      value: '32',
      color: '#ffb400',
      type: 'alert',
      header: 'Bounce Evitados'
    }
  ];

  return (
    <Fragment>
      <Header />
      <Template
        cards={cards.map(card => (
          <Card card={card} />
        ))}
        tabela={<Table dadosvalor={datatable} />}
      />
    </Fragment>
  );
}

export default App;
