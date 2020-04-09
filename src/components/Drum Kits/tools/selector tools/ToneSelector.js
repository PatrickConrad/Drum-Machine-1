import React, { Component } from 'react'

 class ToneSelector extends Component {
    render() {
        return (
            <>
                
                    <div className="toneSelector">
                        <h5>Choose Tone:</h5>
                        <p>Current Tone: {this.props.tone}</p>
                        <select value={this.props.tone} onChange={this.props.toneChange}>
                            <option value="Base1">Base-1</option>
                            <option value="Base2">Base-2</option>
                            <option value="Base3">Base-3</option>
                            <option value="Base4">Base-4</option>
                        </select>
                        
                        
                    </div >
            </>
        )
    }
}

export default ToneSelector
