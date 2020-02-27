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
      isFetching: false,
      animationTabela: true,
      animationCard: true,
      refreshTime: 60000,
      startButtonState: { color: '#FFFFFF', disable: false },
      stopButtonState: { color: '#A9A9A9', disable: true },
      stateSelector: false
    };

    this.startFetch = this.startFetch.bind(this);
    // this.stopFetch = this.stopFetch.bind(this);
    this.controlAnimationTable = this.controlAnimationTable.bind(this);
    this.controlAnimationCard = this.controlAnimationCard.bind(this);
    this.controlRefreshTime = this.controlRefreshTime.bind(this);
  }

  startFetch(definition) {
    this.setState({
      startButtonState: { color: '#A9A9A9', disable: true },
      stopButtonState: { color: '#FFFFFF', disable: false },
      stateSelector: true
    });

    let intervalActualization = setInterval(async () => {
      let stateModel = {
        card: (await PrepareCardData()).card,
        table: await PreparTableData()
      };

      this.setState(stateModel);
    }, 3000);

    console.log('stop');

    //  clearInterval(intervalActualization);
  }

  controlAnimationTable() {
    this.setState({ animationTabela: !this.state.animationTabela });
  }

  controlAnimationCard() {
    this.setState({ animationCard: !this.state.animationCard });
  }

  controlRefreshTime(e) {
    console.log('aaaa');
    console.log(e.target.value);
    if (this.state.refreshTime > 0) {
      this.setState({ refreshTime: e.target.value * 60000 });
    }
    this.setState({ refreshTime: 60000 });
  }

  render() {
    return (
      <>
        <AppContent
          {...this.state}
          startFetch={this.startFetch}
          stopFetch={this.stopFetch}
          controlAnimationTable={this.controlAnimationTable}
          controlAnimationCard={this.controlAnimationCard}
          controlRefreshTime={this.controlRefreshTime}
        ></AppContent>
      </>
    );
  }
}

export default App;
