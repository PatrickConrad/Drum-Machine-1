import React, { Component } from 'react'
import SnareImage from '../../../../../images/SnareImage'

 class TomEndLeft extends Component {
    render() {
        return (
            
            <button className="TomButtons SoundButtons" id="TomEndLeft-button">
                <div className="drumPic container" id="midDrumOne">
                    <SnareImage/>
                    <div className="keyBoard">{this.props.keyPress}</div>
                </div>
            </button>
        )
    }
}

export default TomEndLeft
