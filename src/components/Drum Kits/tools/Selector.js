import React, { Component } from 'react'
import KeySelector from './selector tools/KeySelector'
import ToneSelector from './selector tools/ToneSelector'
import VolumeSelector from './selector tools/VolumeSelector'

 class Selector extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              tone: '',
              keyPressed: '',
              currentVolume: undefined
         }
     }

     componentDidMount(){
         this.setState({
             keyPressed: this.props.defaultKey,
             tone: this.props.defaultTone,
             currentVolume: this.props.currentVolume
         })
     }

     toneChange = () => {
         console.log(this.state.tone);
         console.log('test tone');
     }

     onKeyChange = () => {
        console.log(this.state.keyPressed);

        console.log('test key');
    }
     
    changeVolume = () => {
        // console.log(this.state.currentVolume);

        console.log('test volume');
    }

    render() {
        return (
            <>
                <form >
                    <label>
                    {this.props.name}
                   <div className="selector">
                        <ToneSelector tone={this.state.tone} toneChange={this.toneChange}/>
                        <KeySelector name={this.props.name} defaultKey={this.state.defaultKey } keyPress={this.state.keyPressed} onKeyChange={this.changeKey}/>
                        <VolumeSelector currentVolume={this.state.currentVolume} onVolumeChange={this.changeVolume}/>
                        {/* <input type="submit" value="Submit" /> */}
                        <button>change</button>
                   </div>
                    </label>
                </form>
            </>
        )
    }
}

export default Selector
