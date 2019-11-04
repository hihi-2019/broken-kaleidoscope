import React from 'react'

const randomHexColor = () =>
`${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    
class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style : {
                height: 16,
                width: 16,
                backgroundColor: '#' + randomHexColor()
            }
        }
    }



    clickHandler = evt => {
        this.setState({
          style: {
            height: 16,
            width: 16,
            backgroundColor: '#' + randomHexColor()
          }  
        })
    }

    interval = setInterval(() => {
        this.setState({
            style: {
                height: 16,
                width: 16,
                backgroundColor: '#' + randomHexColor()
              }    
        })
    }, 1000)
    

    doubleHandler = evt => {
        this.setState({
          style: {
            height: 16,
            width: 16,
            backgroundColor: 'white'
          }  
        })
    }  

    dragHandler = evt => {
        this.setState({
            style: {
                height: 3,
                width:3,
                backgroundColor: 'yellow'
            }
        })
    }

    render(){

    return (
        <div style={this.state.style} onClick={this.clickHandler} onDoubleClick={this.doubleHandler} onDragEnter={this.dragHandler} ></div>
    )
    }
    
}

// onDragEnter={this.dragHandler}


console.log(randomHexColor())

export default Pixel

