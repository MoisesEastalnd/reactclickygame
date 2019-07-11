import React, { Component } from 'react';
import Navbar from './components/NavbarLayout/Navbar';
import './App.css';


class App extends Component{
  render() {
    return (
      <div className ='App'>
       <Navbar title="Bred Clicky Game" icon="fab fa-github"/>
       </div>
    );
  }
  
}

export default App;
