import React from 'react'
import Pixel from './Pixel'

// let arrayOfPixel = []

// for(let i=0; i<1000; i++) {
//   arrayOfPixel.push(<Pixel />)
// }

//console.log(arrayOfPixel)

const App = () => {
  return (
    //arrayOfPixel
    <>
    {Array.from({length: 5000}, (v,i) => <Pixel />)}
    </>
  )
}

export default App
