import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BreakoutTwo from './Game/BreakoutTwo';

class App extends Component {
  render() {
    BreakoutTwo();
    return (
      <div id="myCanvas">

      </div>
    );
  }
}

export default App;
