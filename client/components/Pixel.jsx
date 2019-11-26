import React from 'react'

// const Pixel = () => {
//     return (
//         <div style={{width:50, height:50, backgroundColor:'red'}}></div>
//     )
// }

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style : {
                width:50,
                height:50,
                backgroundColor:randomHexColor()
            }
        }
    }

    //Use the event handler to change the component's colour 
    clickHandler = evt => {
        this.setState({
            style : {
                width:50,
                height:50,
                backgroundColor:randomHexColor()
            }
        })
      }
    
      mouseHandler = evt => {
          this.setState({
              style : {
                width:10,
                height:10,
                backgroundColor: 'white'
              }
          })
      }

    render() {
        return (
            <div style={this.state.style} onClick={this.clickHandler} onMouseMove={this. mouseHandler }></div>
        )
        
    }

   
}

export default Pixel