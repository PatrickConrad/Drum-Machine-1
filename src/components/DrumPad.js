import React, { Component } from 'react'

class DrumPad extends Component {
constructor(props) {
    super(props)

}

componentDidMount(){
    document.addEventListener('keydown', this.handleKeyDown)
}

componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDown)

}

handleKeyDown= (e) => {
    if(e.keyCode === this.props.letter.charCodeAt()){
        this.audio.play()
        this.audio.currentTime=0
        this.props.handleDisplay(this.props.id)
    }
}

handleClick = ()=> {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
}



    render() {
        return (
            <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
                <div className="pressKey">{this.props.letter}</div>
                <audio 
                ref={ref => this.audio = ref}
                className="clip" 
                id={this.props.letter} 
                src={this.props.src}
                >

                </audio>
            </div>
        )
    }
}

export default DrumPad
