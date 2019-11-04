import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const blackOut = () => setInterval(()=> randomHexColor(), 2000)

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            style: { 
                height: 10,
                backgroundColor: 'black',
                width: 10}
        } 
    }
    
    delayColorChange = () => {
        setInterval(this.changeColorOnMouseOver, 2000)
    }

    changeColorOnMouseOver = () => {
        this.setState({
            style: { 
                height: 10,
                backgroundColor: randomHexColor(),
                width: 10}
        })
    }

    turnPinkOnMouseClick = () => {
        this.setState({
            style: { 
                height: 10,
                backgroundColor: 'hotpink',
                width: 10} 
        })
    }

    render() {
        return (
            <div onMouseOver={this.delayColorChange} onClick={this.turnPinkOnMouseClick} style = {this.state.style}></div>
        )
    }
}

export default Pixel