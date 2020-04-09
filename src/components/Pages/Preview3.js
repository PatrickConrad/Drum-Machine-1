import React, { Component } from 'react'
import NavBar from './NavBar'
import DrumPad from '../DrumPad'
const data = [
    { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
    { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
    { id: 'drum roll', letter: 'E', src: 'https://www.fesliyanstudios.com/play-mp3/5744' },
    { id: 'tom tom', letter: 'A', src: 'https://www.fesliyanstudios.com/play-mp3/6684' },
    { id: 'cymbal', letter: 'S', src: 'https://www.fesliyanstudios.com/play-mp3/6664' },
    { id: 'tom tom 2', letter: 'D', src: 'https://www.fesliyanstudios.com/play-mp3/6690' },
    { id: 'high hat', letter: 'Z', src: 'https://www.fesliyanstudios.com/play-mp3/6698' },
    { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
    { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
  ]

class Preview3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             display: ""
        }
    }

    handleDisplay = (display) => {
        this.setState({
            display
        })
    }
    
    render() {
        return (
            <>
                <NavBar/>
                <div className="pageBody">
                    <div id="drum-machine">
                        <div id="displayBox">
                            <div id="display">{this.state.display}</div>
                        </div>  
                        <div id="drum-box">
                            {data.map(d => (
                                <DrumPad id={d.id} letter={d.letter} src={d.src} handleDisplay={this.handleDisplay}/>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Preview3
