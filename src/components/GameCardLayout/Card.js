import React, { Component } from 'react';
import images from './../../images.json';
 class Card extends Component {
   
  render() {
    return (
      <div clasName="card text-center">
        <div className="card-body card-img-top">
        <img alt={this.props.url} src={this.props.url}/>
        </div>
        <div className="content">
        <ul>
        <li>
             {this.props.images}
        </li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Card;

