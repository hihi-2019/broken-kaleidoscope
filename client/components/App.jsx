import React from 'react'
import Pixel from './Pixel'


function buildArray (content, numberOfItems) {
  let array = []
  for (let i=0; i<numberOfItems; i++) {
    array.push(content)
  }
  return array
}

const App = () => {
  return (
  // buildArray((<Pixel/>), 250000)
  Array.from({length: 1000}, (v, i) => <Pixel/>)
  )
}

export default App
