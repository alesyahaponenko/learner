import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import axios from 'axios'
import Chat from './Chat/Chat'
import Man from './Man/Man'

const Home = forwardRef((props, ref) => {
  const { ref1, ref2 } = ref
  const [jsonDataArr, setJsonDataArr] = useState([])
  const [loadingState, setLoadingState] = useState()

  const el = useRef()
  const q = gsap.utils.selector(el)
  const tl_intro = useRef()

  useEffect(() => {
    axios
      .get('/api/data')
      .then((res) => {
        setJsonDataArr(res.data.predictions)
        setLoadingState('start')
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (loadingState !== 'start') return
    const vh = (coef) => window.innerHeight * (coef / 100)

    tl_intro.current = gsap.timeline({ paused: true })

    // tl_intro.current.from('.st0', { scale: 0, duration: 1, ease: 'elastic.out(1, 0.6)' }, '<+=0.1')

    let lenght_el = q('li').length - 1

    for (let i = 0; i < lenght_el; i++) {
      tl_intro.current.to(
        q('li')[i],
        {
          x: -vh(30) * Math.cos(i * ((Math.PI * 1.35) / lenght_el)),
          duration: 1,
        },
        i / 6
      )

      tl_intro.current.to(
        q('li')[i],
        {
          y: -vh(30) * Math.sin(i * ((Math.PI * 1.35) / lenght_el)),
          duration: 1,
        },
        i / 6
      )
    }

    tl_intro.current.play()
  }, [loadingState])

  const clickBubble = (e) => {
    e.preventDefault()
    console.log(e.target.classList.value)
  }

  return (
    <div className="inner">
      {!loadingState && (
        <div className="loading">
          <div>loading</div>
        </div>
      )}
      {loadingState && (
        <div className="main">
          <Chat />
          <Man />
          <div className="bubbles">
            <ul ref={el}>
              {jsonDataArr &&
                jsonDataArr.map(
                  ({ block_name, score, short_description, long_description, size }, index) => (
                    <li
                      key={short_description}
                      onClick={clickBubble}
                      className={'liAnim li' + index}
                    >
                      {block_name}
                    </li>
                  )
                )}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
})

export default Home
