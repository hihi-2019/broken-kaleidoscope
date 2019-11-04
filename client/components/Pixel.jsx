import React from "react";

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: 'red',
      height: "3px",
      width: "3px"
    };

    this.handleClick = this.handleClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this)
  }

  onMouseEnter(){
    this.setState({
      backgroundColor: 'red'
    })
  }

  handleClick() {
    this.setState({
      backgroundColor: randomHexColor()
    });
  }

  onDragEnter(){
    this.setState({
    height: "75px",
    width: "75px",
  })
  }
  render() {
    return (
      <div
        style={{
          height: this.state.height,
          width: this.state.width,
          backgroundColor: this.state.backgroundColor


        }}
        onClick={this.handleClick}
        onMouseEnter={this.onMouseEnter}
      ></div>
    );
  }
}

export default Pixel;
