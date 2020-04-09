import React, { Component } from 'react'
import NavBar from './NavBar'

export class Home extends Component {
    render() {
        return (
        
          <>
              <NavBar/>
              <div className="pageHeading">
                    <h1>Music Mixer</h1>
              </div>
          </>
        )
    }
}

export default Home
