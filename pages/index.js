import { gsap } from 'gsap'
import Home from '../components/Home'
import Header from '../components/Header'
import { useRef, useState } from 'react'

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  const ref1 = useRef()
  const ref2 = useRef()

  function handleMouseMove(ev) {
    // setMousePosition({
    //   x: -(window.innerWidth / 2 - ev.pageX) / 960,
    //   y: -(window.innerHeight / 2 - ev.pageY) / 960,
    // })
    // gsap.to(ref1.current, { x: mousePosition.x, y: mousePosition.y, duration: 1 })
    // gsap.to(ref2.current, { x: mousePosition.x, y: mousePosition.y, duration: 1 })
  }

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div className="page">
        <Header />
        <Home
          ref={{
            ref1: ref1,
            ref2: ref2,
          }}
        />
      </div>
    </div>
  )
}

export default App
