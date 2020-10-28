import React, { Component } from 'react';
import './App.scss';
 import Board from './components/Board/Board'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSoundButtons1: true,
      power: true,
      volume: 0.4,
      status: ''
    } 
  }


  handleChange = () => {
    this.setState({
      isSoundButtons1: !this.state.isSoundButtons1
    }) 
  }

  switchPower = () =>{
    this.setState({
      power: !this.state.power
    })
  }

  setVolume = (e) => {
    this.setState({
      volume: e.target.value,
      status: "Volume: " + Math.floor(this.state.volume * 100)
    })
    setTimeout(() => {
      this.setState({
        status: ''
      })
    }, 3000)
  }
  //let status = "Volume: " + Math.floor(this.state.volume * 100) 
  // ten status pod render był.
  render(){
    
    return (
      <div id="drum-machine" className="container">
        <div className="row">
          <div className="col-6">
            test
            <button onClick={this.handleChange}>Change</button>
            <button onClick={this.switchPower}>Power</button>
            <input type="range" min="0" max="1" step='0.01' value={this.state.volume} volume = {this.state.volume} power = {this.state.power} onChange={this.setVolume} />
          </div>
          <div className="col-6">

           <Board isSoundButtons1 = {this.state.isSoundButtons1}  status = {this.state.status} power = {this.state.power} volume = {this.state.volume}/>       
            test2
          </div>
        </div>
      </div>
    );
  }
}



export default App;
