import React, { Component } from 'react'
import NavBar from './NavBar'


class UserDrum extends Component {
    render() {
        return (
            <div>
                <NavBar/>
               <div className="pageHeading">
                    <h1>Pick Your Kit</h1>
               </div>
            </div>
        )
    }
}

export default UserDrum
