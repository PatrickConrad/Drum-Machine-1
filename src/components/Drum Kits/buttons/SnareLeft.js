import React, { Component } from 'react'
import SnareImage from '../../../images/SnareImage'


class SnareLeft extends Component {
    render() {
        return (
            <button className="SnareButton SoundButtons" id="snare-button-one">
                <div className="snareDrumPic container" id="snare-one">
                    <SnareImage/>
                    <div className="keyBoard">{this.props.keyPress}</div>
                </div>
            </button>
        )
    }
}

export default SnareLeft
