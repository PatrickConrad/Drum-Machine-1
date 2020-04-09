import React, { Component } from 'react'
import CymbalImage from '../../../images/CymbalImage'


class HighHat extends Component {
    render() {
        return (
                <button className='HighHatButton SoundButtons' id="high-hat-button">
                    <div className="cymbalDrumPic container" id="highHat">
                        <CymbalImage/>
                        <div className="keyBoard">{this.props.keyPress}</div>
                    </div>
                </button>
        )
    }
}

export default HighHat
