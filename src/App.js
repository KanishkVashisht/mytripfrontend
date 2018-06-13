import React, { Component } from 'react';
import './App.css';
import { Main, Navbar, Footer } from './root';

class App extends Component {
  render() {
    return (
      <div  className="App">
          <Navbar/>
          <Main/>
      </div>
    );
  }
}

export default App;
