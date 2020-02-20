import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content';
import PreparTableData from './useful/PreparTableData';
import PrepareCardData from './useful/PreparCardData';

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

  // fechData() {
  //   debugger;
  //   console.log('start animacao');
  //   setInterval(async () => {
  //     let stateModel = {
  //       card: (await PrepareCardData()).card,
  //       table: await PreparTableData()
  //     };

  //     this.setState(stateModel);
  //     console.log(this.state);
  //   }, 5000);
  // }

  async fechData() {
    console.log('start fecth');

    let stateModel = {
      card: (await PrepareCardData()).card,
      table: await PreparTableData()
    };

    this.setState(stateModel);
  }

  render() {
    return (
      <>
        <AppContent {...this.state} fechData={this.fetchData}></AppContent>
        <button
          onClick={() => {
            this.fechData();
          }}
        >
          sddddddddddd
        </button>
      </>
    );
  }
}

export default App;
