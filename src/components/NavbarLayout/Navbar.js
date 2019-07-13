import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-dark text-danger'>
        <h1>
        <i className= {this.props.icon}/>
        {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar
