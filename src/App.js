import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Template from './components/Template';
import TableStyle from './components/TableStyle';
import PrepareCardData from './useful/PreparCardData';
import CaresHook from './components/CaresHook'
import ServiceApi from './useful/ServiceApi'




function App() {
  const [state, setState] = useState(
    {
      card: [

        {
          value: '997',
          color: '#a08365',
          type: 'mail',
          header: 'Total'
        },
        {
          value: '1457',
          color: '#8a6dd5',
          type: 'clock-circle',
          header: 'Aguardando Envio'
        },
        {
          value: '431',
          color: '#22A7F0',
          iconClass: 'fa fa-paper-plane-o',
          header: 'Enviados'
        },
        {
          value: '35',
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
          value: '350',
          color: '#ffb400',
          type: 'alert',
          header: 'Bounce Evitados'
        }

      ],


      Table: [{
        ap_id: 1,
        ap_name: 'Karoo',
        total: '32',
        waitSend: '4',
        waitDelivery: '4',
        Delivered: '24',
        bounce: '0',
        complaint: '9'
      }]

    }
  );





  async function fechDataCard() {

    const responseCard = await PrepareCardData();
    let copyState = state.Table
    let ajust = ({
      card: responseCard.card,
      Table: copyState
    })

    setState(ajust);
  }

  
  async function fechDataTable(){
     
     const  responseTable = await ServiceApi.getEstatisticasPorApp();

     console.log('responsetable',responseTable)
     let copyState = state.card
     let ajust = ({
       card:copyState,
       Table: responseTable.data
     })
 
     setState(ajust);
   }
 
  








  console.log('state', state)
  return (
    <Fragment>
      <Header />
      <Template
        cards={state.card.map((card, i) => (
          <CaresHook key={i} card={card} />
        ))}
        tabela={<TableStyle dataValue={state.Table} />}
      />
      <button onClick={() => { fechDataCard() }} >Atualizar card</button>
      <button onClick={() => { fechDataTable() }} >Atualizar tabela</button>
    </Fragment>
  );
}

export default App;


