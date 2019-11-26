import React from 'react'
import Pixel from './Pixel'

let arrayOfPixel = []

for(let i=0; i<1000; i++) {
  arrayOfPixel.push(<Pixel />)
}

console.log(arrayOfPixel)

const App = () => {
  return (
    arrayOfPixel
  )
}

export default App
