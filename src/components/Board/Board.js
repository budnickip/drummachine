import React, { Component } from 'react';
import './Board.scss';
import Button from '../Button/Button'

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

export default Board