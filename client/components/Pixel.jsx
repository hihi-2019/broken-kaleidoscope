import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style : {
                backgroundColor: randomHexColor(),
                width: '1rem',
                height: '1rem',
            }
        }
    }

    clickHandler = evt => {
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
            <div style={this.state.style} onClick={this.clickHandler}></div>
        )
    }
}


export default Pixel
