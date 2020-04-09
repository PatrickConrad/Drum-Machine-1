import React, { Component } from 'react'
import Kits from './Kits'
import Tones from './Tones'



 class Sidebar extends Component {
    render() {
        return (
            <div className="drumKitsSide">
                    <Kits/>
                    <Tones/>
                </div>
        )
    }
}

export default Sidebar
