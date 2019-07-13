import React, { Component } from 'react';
import Navbar from './components/NavbarLayout/Navbar';
import Jumbotron from './components/JumbotronLayout/Jumbotron';
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar title= "Bred Jordans Clicky Game" icon="far fa-dizzy"/> 
        <Jumbotron title= "Click the Bred Jordans to get a High Score!!!"/>
      </div>
    );
  }
}

export default App;

