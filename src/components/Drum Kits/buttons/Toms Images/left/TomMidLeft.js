import React, { Component } from 'react'
import SnareImage from '../../../../../images/SnareImage'

class TomMidLeft extends Component {
    render() {
        return (
            <button className="TomButtons SoundButtons" id="TomMidLeft-button">
            <div className="drumPic container" id="midDrumTwo">
                <SnareImage/>
                <div className="keyBoard">{this.props.keyPress}</div>
            </div>
        </button>
        )
    }
}

export default TomMidLeft
