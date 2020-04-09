import React, { Component } from 'react'
import CymbalImage from '../../../images/CymbalImage'

class RightCymble extends Component {
    render() {
        return (
            <button className="CymbleButton SoundButtons" id="cymbal-button-three">
                <div className="cymbalDrumPic container" id="cymbal-three">
                    <CymbalImage/>
                    <div className="keyBoard">{this.props.keyPress}</div>
                </div>
            </button>
        )
    }
}

export default RightCymble
