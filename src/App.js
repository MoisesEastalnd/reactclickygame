import React, { Component } from 'react';
import Navbar from './components/NavbarLayout/Navbar';
import Jumbotron from './components/JumbotronLayout/Jumbotron';
import Card from './components/GameCardLayout/Card';
import images from './images.json';
import Wrapper from './components/Wrapper/Wrapper';
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar title= "Bred Jordans Clicky Game" icon="far fa-dizzy"/> 
        <Jumbotron title= "Click the Bred Jordans to get a High Score!!!"/>
        
        
        
        <Wrapper>
        {images.map(image =>(
        <Card
        id={image.id}
        key={image.id}
        name={image.name}
        url={image.url}
        />
        ))}
      
       
       
        </Wrapper>
      </div>
    );
  }
}

export default App;

