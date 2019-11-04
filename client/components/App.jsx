import React from 'react'
import Pixel from './Pixel'

const App = () => {

  let array = []

  for (let i = 0; i <1000; i++) {
    array.push(<Pixel />)
  }

  return (
    array
  )

}

export default App
