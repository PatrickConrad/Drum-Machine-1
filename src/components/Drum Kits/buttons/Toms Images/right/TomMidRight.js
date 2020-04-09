import React, { Component } from 'react'
import SnareImage from '../../../../../images/SnareImage'

class TomMidRight extends Component {
    render() {
        return (
            <button className="TomButtons SoundButtons" id="TomMidRight-button">
            <div className="drumPic container" id="midDrumThree">
                <SnareImage/>
                <div className="keyBoard">{this.props.keyPress}</div>
            </div>
        </button>
        )
    }
}

export default TomMidRight
