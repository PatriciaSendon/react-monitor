import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Template from './components/Template';
import TableStyle from './components/TableStyle';
import CardStyle from './components/CardsStyle';
import PrepareCardData from './useful/PreparCardData';
import PreparTable from './useful/PreparTableData';

function App() {
  const [state, setState] = useState({
    card: [
      {
        value: '0',
        color: '#666',
        type: 'mail',
        header: 'Total'
      },
      {
        value: '0',
        color: '#8a6dd5',
        type: 'clock-circle',
        header: 'Aguardando Envio'
      },
      {
        value: '0',
        color: '#22A7F0',
        iconClass: 'fa fa-paper-plane-o',
        header: 'Enviados'
      },
      {
        value: '0',
        color: '#1ABC9C',
        type: 'check',
        header: 'Entregues'
      },
      {
        value: '0',
        color: '#960808',
        iconClass: 'fa fa-exclamation-triangle',
        header: 'Bounce Sofridos'
      },
      {
        value: '0',
        color: '#fd5d00',
        type: 'alert',
        header: 'Bounce Evitados'
      }
    ],

    Table: [
      {
        ap_id: 1,
        ap_name: 'Karoo',
        total: '32',
        waitSend: '4',
        waitDelivery: '4',
        Delivered: '24',
        bounce: '0',
        Suprimido: '9'
      }
    ]
  });

  function fechData() {
    setInterval(async () => {
      let copyState = state;
      let stateModel = {
        card: (await PrepareCardData(copyState)).card,
        Table: await PreparTable(copyState)
      };

      setState(stateModel);
    }, 20000);
  }
  fechData();

  return (
    <Fragment>
      <Header />
      <Template
        cards={state.card.map((card, i) => (
          <CardStyle key={i} card={card} />
        ))}
        tabela={<TableStyle dataValue={state.Table} />}
      />
    </Fragment>
  );
}

export default App;
