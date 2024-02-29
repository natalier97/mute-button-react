import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import on from '../icons/on.svg'
import off from '../icons/off.svg'

function App() {
  const [count, setCount] = useState(0)
  const [picButton, setPicButton] = useState(on)


  function handleClickMuteButton () {
    picButton === on ? setPicButton(off) : setPicButton(on)
  }



  return (
    <>
      <img onClick={handleClickMuteButton} src={picButton}/>
    </>
  )
}

export default App
