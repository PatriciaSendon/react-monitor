import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content';
import PreparaData from './useful/preparState';

class App extends Component {
  constructor() {
    super();
    this.state = {
      card: [],
      table: [],
      animationTabela: true,
      animationCard: true,
      refreshTime: 60000,
      refreshValue: 1,
      startButtonState: { color: '#FFFFFF', disable: false },
      stopButtonState: { color: '#A9A9A9', disable: true },
      stateSelector: false,
      stateSwitchTable: true,
      stateSwitchCard: true
    };

    this.startFetch = this.startFetch.bind(this);
    this.stopFetch = this.stopFetch.bind(this);
    this.controlAnimationTable = this.controlAnimationTable.bind(this);
    this.controlAnimationCard = this.controlAnimationCard.bind(this);
    this.controlRefreshTime = this.controlRefreshTime.bind(this);
  }

  componentDidMount() {
    this.RefreshState();
    this.startFetch();
  }

  async RefreshState() {
    let stateModel = await PreparaData();

    this.setState(stateModel);
  }

  interval = null;

  startFetch() {
    this.setState({
      startButtonState: { color: '#A9A9A9', disable: true },
      stopButtonState: { color: '#FFFFFF', disable: false },
      stateSelector: true
    });

    this.interval = setInterval(async () => {
      this.RefreshState();
    }, this.state.refreshTime);
  }

  stopFetch() {
    this.setState({
      startButtonState: { color: '#FFFFFF', disable: false },
      stopButtonState: { color: '#A9A9A9', disable: true },
      stateSelector: false
    });

    clearInterval(this.interval);
  }

  controlAnimationTable() {
    this.setState({
      animationTabela: !this.state.animationTabela,
      stateSwitchTable: !this.state.stateSwitchTable
    });
  }

  controlAnimationCard() {
    this.setState({
      animationCard: !this.state.animationCard,
      stateSwitchCard: !this.state.stateSwitchCard
    });
  }

  controlRefreshTime(e) {
    this.setState({
      refreshTime: e * 6000,
      refreshValue: e
    });
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
