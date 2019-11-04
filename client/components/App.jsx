import React from 'react'
import Pixel from './Pixel'


let pixelArray = []

for (let i=0;i<10000;i++){
 pixelArray.push(<Pixel />)
}


const App = () => {
  return(
    pixelArray
  )
  
}

export default App
