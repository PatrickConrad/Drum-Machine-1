import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import UserDrum from './components/Pages/UserDrum'
import DrumPreview from './components/Pages/DrumPreview'
import Preview3 from './components/Pages/Preview3'
import Kits from './components/Drum Kits/drum-apps/Kits'
import Posted from './components/Pages/Posted'



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Drums/Kits/:drumKitId' component={UserDrum}/>
            <Route exact path='/Preview3' component={Preview3}/>
            <Route exact path='/Drums/Kits' component={Kits}/>
            <Route exact path='/Drums/Posted' component={Posted}/>
          </Switch>

       </Router>
      </div>
    )
  }
}

export default App


