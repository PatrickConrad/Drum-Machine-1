import React, { Component } from 'react'
import SoundButton from '../SoundButton'
import NavBar from './NavBar'

class Preview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:''

        }
    }
    
playSound= () => {
    this.setState({
        name: this.props.id
    })
}

    render() {
        return (
            <div>
                <NavBar/>
                <div id="drum-machine">
                    <div id="display">{this.state.name}</div>
                        <div id="drum-box">
                            <div className="container">
                                <div className="row">
                                    <SoundButton className="drum-pad" id='High-Hat' letter='Q' playSound={this.playSound}/>
                                    <SoundButton className="drum-pad" id='Tamborine' letter='W' playSound={this.playSound}/>
                                    <SoundButton className="drum-pad" id='Cymboal' letter='E' playSound={this.playSound}/>
                                </div>
                            </div>
                            
                            <div className="container">
                                <div className="row">
                                    <SoundButton className="drum-pad" id='Far-Tom' letter='A' playSound={this.playSound}/>
                                    <SoundButton className="drum-pad" id='Mid-Tom' letter='S' playSound={this.playSound}/>
                                    <SoundButton className="drum-pad" id='Snare' letter='D' playSound={this.playSound}/>
                            
                                </div>
                            </div>
                
                            <div className="container">
                                <div className="row">
                                    <SoundButton className="drum-pad" id='Steel' letter='Z' playSound={this.playSound}/>
                                    <SoundButton className="drum-pad" id='Bongo' letter='x' playSound={this.playSound}/>
                                    <SoundButton className="drum-pad" id='Congo' letter='C' playSound={this.playSound}/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Preview
