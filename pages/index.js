import Home from '../components/Home/Home'
import Header from '../components/Header'
import { useState } from 'react'
import {useDispatch} from 'react-redux';
import {setMouseCoordinate} from '../store/feutures/bubblesSlicer';

function App() {
  const dispatch = useDispatch()
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  function handleMouseMove(ev) {
    setMousePosition({
      x:  ev.pageX / 260,
      y: -(window.innerHeight / 2 - ev.pageY) / 160,
    })
    dispatch(setMouseCoordinate({ x:mousePosition.x, y:mousePosition.y }))
  }

  return (
    <div className='container' onMouseMove={handleMouseMove}>
      <div className='page'>
        <Header />
        <Home />
      </div>
    </div>
  )
}

export default App
