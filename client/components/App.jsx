import React from 'react'
import Pixel from './Pixel'
let j = 0

const App = () => {
  let newArr = multiply()
  return (
    <div>
      {newArr.map((pixel, i) => {
        j = j + i
        return(
        <span key={j}>
          {pixel}
        </span>
        )
      })}  
    </div>
    )
}

const multiply = () => {
  //many components
  let arr = []
  for (let i = 0; i < 250; i++) {
    arr.push(<Pixel />)
  }
  return arr
}

export default App
