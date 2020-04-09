import React, { Component } from 'react'

class SoundButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sound: '',
             id: '',
             pressKey: ''
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
           
        })
        this.setState({
            
            pressKey: this.props.letter
        })
    }
    


    playSound= () =>{
        console.log(this.state.id);
        console.log(this.state.pressKey);

    }

    render() {
        return (
            <div className='drum-pad' onClick={this.playSound} id={this.state.name} letter={this.state.pressKey}>
                <div className='pressKey'>{this.state.pressKey}</div>
            </div>
        )
    }
}

export default SoundButton
