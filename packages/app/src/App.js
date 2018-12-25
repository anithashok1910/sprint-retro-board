import React, { Component } from 'react';
import Navbar from "./components/navbar/Navbar";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Main/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
