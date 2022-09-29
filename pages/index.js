import Home from '../components/Home/Home'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMouseCoordinate } from '../store/feutures/bubblesSlicer'
import Header from '../components/Header/Header'

function App() {
  const dispatch = useDispatch()
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  function handleMouseMove(ev) {
    setMousePosition({
      x: ev.pageX / 1000,
      y: -(window.innerHeight / 2 - ev.pageY) / 800,
    })
    dispatch(setMouseCoordinate({ x: mousePosition.x, y: mousePosition.y }))
  }

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div className="page">
        <Header />
        <Home />
      </div>
    </div>
  )
}

export default App
