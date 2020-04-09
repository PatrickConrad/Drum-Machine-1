import React, { Component } from 'react'
import SnareImage from '../../../../../images/SnareImage'


class TomEndRight extends Component {
    render() {
        return (
            <button className="TomButtons SoundButtons" id="TomEndRight-button">
            <div className="drumPic container" id="midDrumFour">
                <SnareImage/>
                <div className="keyBoard">{this.props.keyPress}</div>
            </div>
        </button>
        )
    }
}

export default TomEndRight
