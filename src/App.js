import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content';
import PreparaData from './useful/preparState'

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
    this.stopFetch = this.stopFetch.bind(this);
    this.controlAnimationTable = this.controlAnimationTable.bind(this);
    this.controlAnimationCard = this.controlAnimationCard.bind(this);
    this.controlRefreshTime = this.controlRefreshTime.bind(this);
  }

  componentDidMount() {
     
   let stateModel = PreparaData()

    this.setState(stateModel);

    
    this.startFetch();


  }

  interval = null;

  startFetch() {
    this.setState({
      startButtonState: { color: '#A9A9A9', disable: true },
      stopButtonState: { color: '#FFFFFF', disable: false },
      stateSelector: true
    });

    this.interval = setInterval(async () => {
      
      let stateModel =  PreparaData();


      this.setState(stateModel);
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
    this.setState({ animationTabela: !this.state.animationTabela });
  }

  controlAnimationCard() {
    this.setState({ animationCard: !this.state.animationCard });
  }

  controlRefreshTime(e) {
    this.setState({ refreshTime: e * 60000 });
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
