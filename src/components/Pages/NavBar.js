import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className='navBar'>
               
                <div className='navLink'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='navLink'>
                    <Link to='/Preview3'>Preview</Link>
                </div>
                <div className='navLink'>
                    <Link to='/Drums/Kits'>Drum Kits</Link>
                </div>
                <div className='navLink'>
                    <Link to='/Drums/Posted'>User Records</Link>
                </div>
                {/* <div className='navLink'>
                    <Link to='/Drums/${drumKit}'>User Records</Link>
                </div> */}
          </div>
        )
    }
}

export default NavBar
