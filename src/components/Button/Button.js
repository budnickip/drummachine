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
  
    /*logKey = (e) => {
      if(e.code == "Key" + this.props.value){
        this.props.onClick()
      }
    }
*/
    logKey = (e) => {
      if(e.code == "Key" + this.props.value){
        this.props.playSound()
      }
    }
    playSound = () => {
      const sound = document.getElementById(this.props.value);
      sound.currentTime = 0;
      sound.play();
      this.setState({
        button: "z"
      })
      /*
      this.activatePad();
      setTimeout(() => this.activatePad(), 100);
      this.props.updateDisplay(this.props.clipId.replace(/-/g, ' ')); */
    }
  
    render(){
      return(
        <div className="drum-pad"
          id={this.props.id}
          onClick={this.props.playSound}>
         {/* <button className="drum-pad" onClick={this.props.onClick}>{this.props.value}</button>*/} 
          <audio
            className='clip' 
            id={this.props.value}
            src={this.props.url}/>
            {this.props.value}
        </div>
      )
    }
  }

export default Button