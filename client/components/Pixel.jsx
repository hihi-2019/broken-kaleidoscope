import React from 'react'

class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        height: '20px',
        width: '20px',
        background: 'white'
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

  turnGreen = () => {
    this.setState({
      style: {
        height: this.changeHeight(),
        width: this.changeWidth(),
        background: 'green'
      }
    })
  }

  changeHeight = () => (Math.random() * 40).toString() + 'px'

  changeWidth = () => (Math.random() * 40).toString() + 'px'

  render() {
    return (
      <div
        onClick={this.handleClick}
        onMouseEnter={this.turnGreen}
        style={this.state.style}
      ></div>
    )
  }
}

export default Pixel
