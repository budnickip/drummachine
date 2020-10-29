import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    constructor(props){
      super(props)
    }
    //tylko w tym miejscu w reactie można dodać eventlistener
    componentDidMount() {
      document.addEventListener('keydown', this.logKey);
    }
    //jak go nie usuniesz to będzie wywalało błąd, że trzeba go usunąć
    componentWillUnmount() {
      document.removeEventListener('keydown', this.logKey);
    }
  
    logKey = (e) => {
      if(e.code == "Key" + this.props.value){
        this.props.onClick()
      }
    }
  
    render(){
      return(
        <div className="col-4">
          <button className="drum-pad" onClick={this.props.onClick}>{this.props.value}</button>
        </div>
      )
    }
  }

export default Button