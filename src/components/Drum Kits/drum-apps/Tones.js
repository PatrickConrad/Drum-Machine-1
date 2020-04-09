import React, { Component } from 'react'
import ToneSelector from '../tools/selector tools/ToneSelector'
import Selector from '../tools/Selector'
import AddTone from '../tools/selector tools/AddTone'
class Tones extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userTones: []
        }
    }
    
    newTone = (e)=> {

        let addedTones = [...this.state.userTones]
        this.setState({
            userTones: addedTones.push(e)
        })
    }



    render() {
        return (
            <>
               <h5>Drum Tones</h5> 

               <Selector name="Base" defaultKey=" " defaultTone="Base-1" currentVolume={5}/>
               <Selector name="Tom-End-Left" defaultKey="a" defaultTone="Tom-Drum-1" currentVolume={5}/>
               <Selector name="Tom-End-Right" defaultKey=";" defaultTone="Tom-Drum-2" currentVolume={5}/>
               <Selector name="Tom-Center-Left" defaultKey="f" defaultTone="Tom-Drum-3" currentVolume={5}/>
               <Selector name="Tom-Center-Right" defaultKey="j" defaultTone="Tom-Drum-4" currentVolume={5}/>
               <Selector name="Snare-Right" defaultKey="l" defaultTone="Snare-1" currentVolume={5}/>
               <Selector name="Snare-Left" defaultKey="s" defaultTone="Snare-2" currentVolume={5}/>
               <Selector name="Cymbal-Left" defaultKey="q" defaultTone="Cymbal-1" currentVolume={5}/>
               <Selector name="HighHat" defaultKey="t" defaultTone="High-Hat-1" currentVolume={5}/>
               <Selector name="Cymbal-Right" defaultKey="p" defaultTone="Cymbal-2" currentVolume={5}/>
               <AddTone newTone={this.newTone}/>

               

            </>
        )
    }
}

export default Tones
