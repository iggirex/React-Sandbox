import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

sayhello(name){
  return "Hello " + name;
}
  render() {
    const name = "Sammy";
    return (
      <div className="App">
        <h2>just some sample data: { this.sayhello("Ig$") }</h2>
      </div>
    );
  }
}

export default App;
