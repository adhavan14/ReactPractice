import { useState } from "react"
import Cartoon from "./components/cartoon"
import { NextButton, PrevButton } from "./components/stepButton"

function App() {
  
  const [imageIndex, setImageIndex] = useState(0)

  const nextFunction = () => {
      setImageIndex(imageIndex + 1)
  }

  const prevFunction = () => {
      setImageIndex(imageIndex - 1)
  }

  return (
    <div className="decorate">
      <Cartoon imageIndex = {imageIndex}/>
      <div className="image-button">
        <PrevButton prevFunction = {prevFunction} imageIndex = {imageIndex}/>
        <NextButton nextFunction = {nextFunction} imageIndex = {imageIndex}/>
      </div>
    </div>
  )
}

export default App
