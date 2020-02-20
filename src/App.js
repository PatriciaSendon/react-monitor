import React, {  Component } from 'react';
import './App.css';
import AppContent from './components/app-content';


class App extends Component {
  constructor() {
    super();
    this.state = {
      card: [],
      table: [],
      isFetching: false
    };

    this.fechData =this.fechData.bind(this)
    
  }

    fechData() {
     setInterval(async () => {
       let copyState = state;
       let stateModel = {
         card: (await PrepareCardData(copyState)).card,
         Table: await PreparTable(copyState)
       };

       setState(stateModel);
     }, 20000);
   }

  render() {
    return <AppContent
     {...this.state}
     fechData={this.fetchData} />;
  }
}

export default App;
