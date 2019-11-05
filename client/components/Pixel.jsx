import React from "react";

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`;

class Pixel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: this.colorChanger(),
      height: "10px",
      width: "10px"
    };

    this.handleClick = this.handleClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.colorChanger = this.colorChanger.bind(this);
  }

  // created 3 components, set a different state inside each one which corresponds with a click event

  colorChanger() {
    setInterval(() => {
      this.setState({
        backgroundColor: randomHexColor()
      });
    }, 4000);
  }

  onMouseEnter() {
    this.setState({
      backgroundColor: "red"
    });
  }

  handleClick() {
    this.setState({
      backgroundColor: randomHexColor()
    });
  }

  onDragEnter() {
    this.setState({
      backgroundColor: "red",
      height: "75px",
      width: "75px"
    });
  }

  // Display the date and added the states to the style through "this.state"

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
        onDragEnter={this.onDragEnter}
      ></div>
    );
  }
}

export default Pixel;
