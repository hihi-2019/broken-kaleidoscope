import React from 'react'

class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        height: '20px',
        width: '20px',
        background: this.randomHexColor()
      }
    }
  }

  randomHexColor = () => {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`
  }
   

  handleClick = () => {
    this.setState({
      style: {
        height: '10px',
        width: '10px',
        background: this.randomHexColor()
      }
    })
    // set state
  }
  
  render() {
    return <div onClick={this.handleClick} onMouseOver={this.handleClick} style={this.state.style}></div>
  }
}

export default Pixel
