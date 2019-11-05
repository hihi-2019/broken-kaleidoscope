import React from 'react'

const randomHexColor = () =>
`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const randomSizedSquare = () => 
`${Math.floor(Math.random() * 20) + 10}px`

// want add in a number when clicked and the number to go up to 60 using .setInterval
 
  // let numArr = Array.from({length: 60}, (v, i) => i)
  // let num = 0

  // for (let i = 0; i < numArr.length; i++) {
  //   num = i; 
  // }

  // return pixelDiv.innerHTML = num

  //  return pixelDiv.innerHTML = 5








class Pixel extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      style : {
        backgroundColor: 'orange',
        width: '10px',
        height: '10px',
      }, 
      count: 0,
    }
  }

  handleClick = () => {
    this.setState({
      style : {
        backgroundColor: randomHexColor(),
        width: randomSizedSquare(),
        height: randomSizedSquare(),
      }
    })
  }

  clickToPurple = () => {
    this.setState({
      style : {
        backgroundColor: 'darkSlateBlue',
        width: '25px',
        height: '25px',
        borderRadius: '50%',
      },
      count: this.addNumber()
    
    })
  }

  myTimer = () => {
    console.log('myTimer')
    console.log(this)
    return this.state.count +1
  }

   addNumber = () => {
    setInterval(this.myTimer, 1000);
  }

  // doubleClickPurple = () => {
  //   let purpleCircle =  this.setState({
  //     style : {
  //       backgroundColor: 'darkSlateBlue',
  //       width: '25px',
  //       height: '25px',
  //       borderRadius: '50%',
  //     }
  //   )}

  //   if (purpleCircle) {
  //     this.setState({
  //       style : {
  //         backgroundColor: 'darkSlateBlue',
  //         width: '50px',
  //         height: '50px',
  //         borderRadius: '50%',
  //       },
  //     )} 
  //   }

  // }
  // dblclick={this.doubleClickPurple}

  drag = () => {
    this.setState({
      style: {
        backgroundColor: 'grey',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
      }
    })
  }


  render(){
    // console.log(randomSizedSquare())
    return (
      <div style={this.state.style} onMouseOver={this.handleClick} onClick={this.clickToPurple}  onDragEnter={this.drag} ></div>
    )
  }
}


export default Pixel