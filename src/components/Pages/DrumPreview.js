import React, { Component } from 'react'
import NavBar from './NavBar'
import Sidebar from '../Drum Kits/drum-apps/Sidebar'
import Base from '../Drum Kits/buttons/Base'
import HighHat from '../Drum Kits/buttons/HighHat'
import LeftCymble from '../Drum Kits/buttons/LeftCymble'
import RightCymble from '../Drum Kits/buttons/RightCymble'
import SnareLeft from '../Drum Kits/buttons/SnareLeft'
import TomEndRight from '../Drum Kits/buttons/Toms Images/right/TomEndRight'
import TomMidRight from '../Drum Kits/buttons/Toms Images/right/TomMidRight'
import TomEndLeft from '../Drum Kits/buttons/Toms Images/left/TomEndLeft'
import TomMidLeft from '../Drum Kits/buttons/Toms Images/left/TomMidLeft'
import SnareRight from '../Drum Kits/buttons/SnareRight'





class DrumPreview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             keyPress: 'B'
        }
    }
    

play = ()=> {
    console.log(this.state.keyPress);
}

    render() {
        return (
            
        <div>
            <NavBar/>
            <div className="pageHeading">
                <h1>Preview</h1>
            </div>
            <div className="SnareAnime">

            </div>
           <div className="drumMachine" id="drum-machine">
                <Sidebar />>

                <div className='drumSet' id="display">
               
                    <div className="cymbalDrums">
                        <LeftCymble  keyPress={this.state.keyPress}/>
                        <HighHat keyPress={this.state.keyPress}/>
                        <RightCymble keyPress={this.state.keyPress}/>

                
                    </div>
                    <div className="snareDrums">
               
                        <SnareLeft className={this.state.keyPress}/>
                        <SnareRight className={this.state.keyPress}/>

                    </div>
                    <div className='midDrums'>

                        <TomEndLeft className={this.state.keyPress}/>
                        <TomMidLeft className={this.state.keyPress}/>
                        <TomMidRight className={this.state.keyPress}/>
                        <TomEndRight className={this.state.keyPress}/>

                    </div>

                    <div className='baseDrum'>
               
                        <Base className={this.state.keyPress}/>
                   
                    </div>
                    
                </div>
           </div>
        </div>
        )
    }
}

export default DrumPreview
