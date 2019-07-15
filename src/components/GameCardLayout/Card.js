import React, { Component } from 'react';
import images from './../../images.json';
 class Card extends Component {
   
  render() {
    return (
      <div clasName="card">
        <div className="img-container">
        <img alt={this.props.url} src={this.props.url}/>
        </div>
        <div className="content">
        <ul>
        <li>
             
        </li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Card;

