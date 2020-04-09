import React, { Component } from 'react'
import SnareImage from '../../../images/SnareImage'

 class SnareRight extends Component {
    render() {
        return (
            <button className="SnareButton SoundButtons" id="snare-button-two">
                <div className="snareDrumPic container" id="snare-two">
                    <SnareImage/>
                    <div className="keyBoard">{this.props.keyPress}</div>
                </div>
            </button>
        )
    }
}

export default SnareRight
