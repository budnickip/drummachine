import React, { Component } from 'react';
import './App.scss';

const soundButtons1 = [
  {
    key: 'Q',
    keycode: 81,
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    key: 'W',
    keycode: 87,
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    key: 'E',
    keycode: 69,
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    key: 'A',
    keycode: 65,
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    key: 'S',
    keycode: 83,
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    key: 'D',
    keycode: 68,
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    key: 'Z',
    keycode: 90,
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    key: 'X',
    keycode: 88,
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'C',
    keycode: 67,
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },

]

const soundButtons2 = [
  {
    key: 'Q',
    keycode: 81,
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    key: 'W',
    keycode: 87,
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    key: 'E',
    keycode: 69,
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    key: 'A',
    keycode: 65,
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    key: 'S',
    keycode: 83,
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    key: 'D',
    keycode: 68,
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    key: 'Z',
    keycode: 90,
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    key: 'X',
    keycode: 88,
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    key: 'C',
    keycode: 67,
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
]
/*
function Button(props) {
  
  return(
    <button onClick={props.onClick}>{props.value}</button>
  )
}
*/
class Board extends Component{
  constructor(props){
    super(props)
    this.state={
      button: ''
    }
  }

 /* setTimeout(
    function() {
        this.setState({ position: 1 });
    }
    .bind(this),
    3000
); */

  playButton = (url, id) => {
    var audio = new Audio(url);
    if(this.props.power){
     audio.volume = this.props.volume
     this.setState({
       button: id
     })
     setTimeout(() => {
       this.setState({
         button: ''
       })
     }, 1500)
     audio.play();
    }
  }
  
  render(){
      return( 
          <div>
             { this.props.isSoundButtons1 ? soundButtons1.map(sound => <Button 
             onClick={() => this.playButton(sound.url, sound.id)} value = {sound.key} />) : soundButtons2.map(sound => <Button 
             onClick={() => this.playButton(sound.url, sound.id)} value = {sound.key} />) }
             <div id="display" className="displayer">
                {this.state.button ? this.state.button : this.props.status ? this.props.status : ""}
             </div>
          </div>         
      )
  }
}

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
      <button onClick={this.props.onClick}>{this.props.value}</button>
    )
  }
}
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

/*
  playButton = (url) => {
     var audio = new Audio(url);
     if(this.state.power){
      audio.volume = this.state.volume
      audio.play();
     }
   } */

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

  /*updateTextInput = (val) => {
    console.log(val)
    document.getElementById('textInput').value=val; 
  } */


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
