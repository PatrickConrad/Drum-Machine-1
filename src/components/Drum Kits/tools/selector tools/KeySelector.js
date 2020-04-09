import React, { Component } from 'react'

class KeySelector extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             keyPress: ""
        }
    }

    componentDidMount(){
        this.setState({
            keyPress: this.props.defaultKey
        })
    }
    
    // componentDidMount(){
    //     if(this.state.key === ""){
    //         if(this.props.name === "Base"){
    //         this.setState({
    //             keyPress: ' ',
    //             bracket: "{SPACE}"
    //         })
    //         }else if(this.props.name === "Tom-End-Left"){
    //             this.setState({
    //                 keyPress: 'a',
    //                 bracket: "{a}"
    //             })
    //         }else if(this.props.name === "Tom-End-Right"){
    //             this.setState({
    //                 keyPress: ';',
    //                 bracket: "{;}"
    //             })
    //         }else if(this.props.name === "Tom-Center-Left"){
    //             this.setState({
    //                 keyPress: 'f',
    //                 bracket: "{f}"
    //             })
    //         }else if(this.props.name === "Tom-Center-Right"){
    //             this.setState({
    //                 keyPress: 'j',
    //                 bracket: "{j}"
    //             })
    //         }else if(this.props.name === "Cymbal-Left"){
    //             this.setState({
    //                 keyPress: 'q',
    //                 bracket: "{q}"
    //             })
    //         }else if(this.props.name === "Cymbal-Right"){
    //             this.setState({
    //                 keyPress: 'p',
    //                 bracket: "{p}"
    //             })
    //         }else if(this.props.name === "Snare-Right"){
    //             this.setState({
    //                 keyPress: 'l',
    //                 bracket: "{l}"
    //             })
    //         }else if(this.props.name === "Snare-Left"){
    //             this.setState({
    //                 keyPress: 's',
    //                 bracket: "{s}"
    //             })
    //         }else if(this.props.name === "HighHat"){
    //             this.setState({
    //                 keyPress: 't',
    //                 bracket: "{t}"
    //             })
    //         }
    //     }
    //     this.setState({
    //         keyPress: this.state.keyPress
    //     })
    // }

    

    render() {
        return (
            <div className="keySelector">
                <h5>Key Assigned:</h5>
                <div className="keydisplay">
                    
                    <input className="PressedKey" onChange={this.props.onKeyChange}
                    placeholder={this.props.keyPress}>
                        
                    </input>
                </div>
            </div>
        )
    }
}

export default KeySelector
