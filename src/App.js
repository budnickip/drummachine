import React, { Component, useState } from 'react';
import './App.scss';
 import Board from './components/Board/Board'

/*
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
            <div className="col-md-6 text-center">
              <div className="row">
                <div className="power col-12">
                  <p className="power__paragraph">Power:</p>
                  <label className="switch">
                    <input type="checkbox" checked = {this.state.power} onChange={this.switchPower}/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                   <input type="range" className="range" min="0" max="1" step='0.01' value={this.state.volume} volume = {this.state.volume} power = {this.state.power} onChange={this.setVolume} />
                </div>
              </div>
              <div className="row">
                <div className="bank col-12">
                  <p className="bank__paragraph">Bank:</p>
                  <label className="switch">
                    <input type="checkbox" checked = {this.state.isSoundButtons1} onChange={this.handleChange}/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

            </div>
        </div>
      </div>
    );
  }
}
*/

function App(){

    const [isSoundButtons1, setIsSoundButtons1] = useState(true)
    const [power, setPower] = useState(true)
    const [volume, setVolume] = useState('0.4')
    const [status, setStatus] = useState('')
    const [isChecked, setIsChecked] = useState(true)

    const handleChange = () => {
      setIsSoundButtons1(!isSoundButtons1)
    }
  
    const switchPower = () =>{
      setPower(!power)
    }
  
    const changeVolume = (e) => {
      setVolume(e.target.value)
      setStatus("Volume: " + Math.floor(volume * 100))

      setTimeout(() => {
        setStatus('')
      }, 3000)
    }

    return (
      <div id="drum-machine" className="container">
        <div className="row machine">
          <div className="col-md-6">
            <Board isSoundButtons1 = {isSoundButtons1}  status = {status} power = {power} volume = {volume}/>       
          </div>
            <div className="col-md-6 text-center">
              <div className="row">
                <div className="power col-12">
                  <p className="power__paragraph">Power:</p>
                  <label className="switch">
                    <input type="checkbox" checked = {power} onChange={switchPower}/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                   <input type="range" className="range" min="0" max="1" step='0.01' value={volume} volume = {volume} power = {power} onChange={changeVolume} />
                </div>
              </div>
              <div className="row">
                <div className="bank col-12">
                  <p className="bank__paragraph">Bank:</p>
                  <label className="switch">
                    <input type="checkbox" checked = {isSoundButtons1} onChange={handleChange}/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

            </div>
        </div>
      </div>
    );

}


export default App;
