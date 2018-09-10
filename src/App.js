import React, { Component } from 'react';
import Navbar from "./components/navbar/Navbar";
import BoardInterface from "./components/boardInterface/BoardInterface";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <BoardInterface/>
      </div>
    );
  }
}

export default App;
