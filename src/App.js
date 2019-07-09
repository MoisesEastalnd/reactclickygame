import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
import images from "./images.json";


  


function App() {
  console.log(images)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
