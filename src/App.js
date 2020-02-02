import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    const name = 'Hello React!';
    const style = {
      fontSize: '2rem',
      padding: '0.5rem'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* JSX (Javascript XML) */}
          <p style={style} className="App-msg">{name}</p>
        </header>
      </div>
    );
  }
}

export default App;
