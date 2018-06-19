import React, { Component } from 'react';
import './App.css';
import Main from "./containers/main/Main";

class App extends Component {
  constructor(){
    super();

  }
  
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
