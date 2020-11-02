import React, { Component, useEffect } from 'react';
import './Button.scss';
/*
class Button extends Component {
    constructor(props){
      super(props)
    }
    //tylko w tym miejscu w reactie można dodać eventlistener 
    //no chyba, że użyję hooków :)
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
  } */
  // zmiana na użycie komponentu funkcyjnego oraz dodanie hooka useEffect zamiast 
  //sideeffects
  function Button(props){
    useEffect(()=>{
      document.addEventListener('keydown', logKey);
      return () => {
        document.removeEventListener('keydown', logKey);
      }
    })
    const logKey = (e) => {
      if(e.code == "Key" + props.value){
        props.onClick()
      }
    }
  
    
      return(
        <div className="col-4">
          <button className="drum-pad" onClick={props.onClick}>{props.value}</button>
        </div>
      )
    
  }

export default Button