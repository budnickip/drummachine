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
      status: '',
      isChecked: true
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
        <div className="row machine">
          <div className="col-md-6">
            <Board isSoundButtons1 = {this.state.isSoundButtons1}  status = {this.state.status} power = {this.state.power} volume = {this.state.volume}/>       
          </div>
            <div className="col-md-6">
              Power:
              <label className="switch">
                <input type="checkbox" checked = {this.state.power} onChange={this.switchPower}/>
                <span className="slider round"></span>
              </label>
              <input type="range" className="range" min="0" max="1" step='0.01' value={this.state.volume} volume = {this.state.volume} power = {this.state.power} onChange={this.setVolume} />
              Bank:
              <label className="switch">
                <input type="checkbox" checked = {this.state.isSoundButtons1} onChange={this.handleChange}/>
                <span className="slider round"></span>
              </label>

            </div>
        </div>
      </div>
    );
  }
}



export default App;
