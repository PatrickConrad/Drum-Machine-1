import React, { Component } from 'react'
import BaseImage from '../../../images/BaseImage'

class Base extends Component {
    render() {
        return (
            <button className="BaseButton SoundButtons" id="base-button">
            <div className="baseDrumPic containers" id="baseDrumPic">
                <BaseImage/>
                <div className="keyBoard">{this.props.keyPress}</div>
            </div>
            </button>
        )
    }
}

export default Base
