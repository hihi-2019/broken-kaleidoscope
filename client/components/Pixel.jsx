import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`



class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style : {
                backgroundColor: this.delayColorChange(),
                width: '1rem',
                height: '1rem',
            }
        }
    }



    // clickHandler = evt => {
    //     this.setState({
    //         style : {
    //             backgroundColor: randomHexColor(),
    //             width: '1rem',
    //             height: '1rem',
    //         }

    //     })
    // }
    // greenify = evt => {
    //     this.setState({
    //         style : {
    //             backgroundColor: '#aaf0d1',
    //             width: '1rem',
    //             height: '1rem',
    //         }
    //     })
    // }
    // makeBlack = evt => {
    //     evt.preventDefault()
    //     this.setState({
    //         style : {
    //             backgroundColor: 'black',
    //             width: '1rem',
    //             height: '1rem',
    //         }
    //     })
    // }
    makeWhite = evt => {
        evt.preventDefault()
        this.setState({
            style : {
                backgroundColor: 'white',
                width: '1rem',
                height: '1rem',
            }
        })
    }
    makeYellow = evt => {
        evt.preventDefault()
        this.setState({
            style : {
                backgroundColor: 'yellow',
                width: '1rem',
                height: '1rem',
            }
        })
    }

    delayColorChange = evt => {
        setInterval(this.colorChanger, 2000)
    }

    colorChanger = evt => {
        this.setState({
            style : {
                backgroundColor: randomHexColor(),
                width: '1rem',
                height: '1rem',
            }
        })
    }
    
    render() {

        return (
            <div style={this.state.style} onDoubleClick={this.makeWhite} onDragEnter={this.makeYellow}></div>
        )
    }
}


export default Pixel
