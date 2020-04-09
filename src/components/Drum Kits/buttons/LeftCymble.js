import React, { Component } from 'react'
import CymbalImage from '../../../images/CymbalImage'

class LeftCymble extends Component {
    render() {
        return (
            <button className="CymbleButton SoundButtons" id="cymbal-button-one">
                <div className="cymbalDrumPic container" id="cymbal-one">
                    <CymbalImage/>
                    <div className="keyBoard">{this.props.keyPress}</div>
                </div>
            </button>
        )
    }
}

export default LeftCymble
