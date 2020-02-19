import React, { Fragment, useState, Component } from 'react';
import './App.css';
import AppContent from './components/app-content';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      card: [],
      table: [],
      isFetching: false
    };
    this.fechData = this.fechData.bind(this);
  }

  // function fechData() {
  //   setInterval(async () => {
  //     let copyState = state;
  //     let stateModel = {
  //       card: (await PrepareCardData(copyState)).card,
  //       Table: await PreparTable(copyState)
  //     };

  //     setState(stateModel);
  //   }, 20000);
  // }

  render() {
    return <AppContent {...this.state} />;
  }
}

export default App;
