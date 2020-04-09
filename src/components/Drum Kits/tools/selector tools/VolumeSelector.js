import React, { Component } from 'react'
import InputRange from 'react-input-range';

class VolumeSelector extends Component {
    


    render() {
        return (
            <div className="VolumeSelector">
                <h5>Tone Volume:</h5>
                <div>
                    <p>{this.props.currentVolume}</p>
                </div>
                <InputRange
                    maxValue={20}
                    minValue={0}
                    value={this.props.currentVolume}
                    onChange={this.props.onVolumeChange} />
            </div>
        )
    }
}



export default VolumeSelector