import React, { Component } from "react";

class Jumbotron extends Component{
    render(){
        return(
            <div className = "jumbotron bg-secondary text-danger">
                <h1>
                {this.props.title}
                </h1>
            </div>
    
        );
    }
    
}

export default Jumbotron;