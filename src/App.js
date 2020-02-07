import React, { Fragment } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';

function App() {
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
    </Fragment>
  );
}

export default App;
