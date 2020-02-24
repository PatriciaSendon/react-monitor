import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content';
import PreparTableData from './useful/PreparTableData';
import PrepareCardData from './useful/PreparCardData';

// async fechDataInicial => {
//   console.log('start fecth');

//   let stateModelInicial = {
//     card: (await PrepareCardData()).card,
//     table: await PreparTableData()
//   };
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      card: [],
      table: [],
      isFetching: false,
      animationTabela:true,
      animationCard:true
    };

    this.fechData = this.fechData.bind(this);
    this.controlAnimationTable = this.controlAnimationTable.bind(this)
    this.controlAnimationCard = this.controlAnimationCard.bind(this)
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

  controlAnimationTable(){

    
   
    this.setState({ animationTabela :!this.state.animationTabela})

   
  };

  controlAnimationCard(){

    
   this.setState({ animationCard:!this.state.animationCard})

    console.log(this.state)
  };

  


  render() {
    return (
      <>
        <AppContent {...this.state}
         fechData = {this.fetchData}
         controlAnimationTable = {this.controlAnimationTable}
         controlAnimationCard = {this.controlAnimationCard}
         ></AppContent>
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
