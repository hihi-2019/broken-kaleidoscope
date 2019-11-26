import React from 'react'

// const Pixel = () => {
//     return (
//         <div style={{width:50, height:50, backgroundColor:'red'}}></div>
//     )
// }

class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style : {
                width:50,
                height:50,
                backgroundColor:'red'
            }
        }
    }

    render() {
        return (
            <div style={this.state.style}></div>
        )
        
    }

   
}

export default Pixel