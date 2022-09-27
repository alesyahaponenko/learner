import styles from './Bubbles.module.scss'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  allAnimationStart,
  allAnimationStop,
  setChatQuery,
  setIsBubbleClick,
} from '../../store/feutures/bubblesSlicer'

const Bubbles = () => {
  const { isBubbleClick, bubblesAnimation, predictions, allowAnimation, isReady, chatQuery } =
    useSelector((state) => state.bubbles)
  const all = useSelector((state) => state.bubbles)
  const dispatch = useDispatch()

  const [currentData, setCurrentData] = useState([])
  const [bubblePosition, setBubblePosition] = useState(0)
  const [predictions_sorted, setPredictions_sorted] = useState(null)

  const el = useRef()
  const q = gsap.utils.selector(el)
  const tl_intro = useRef(null)
  const tl_more = useRef(null)
  const tl_hover = useRef(null)
  const tl_moveDown = useRef(null)

  const [bubbles, setBubbles] = useState(null)
  const [big, setBig] = useState(null)
  const [elSmall, setElSmall] = useState(null)

  gsap.config({
    force3D: false,
    nullTargetWarn: false,
  })

  useEffect(() => {
    if (predictions && isBubbleClick) {
      let arr = [...predictions]
      let p = arr.shift()
      arr.splice(bubblePosition, 0, p)
      console.log('predictions', predictions)
      console.log('arr', arr)
      console.log('currentDataA', currentData)
      setCurrentData(arr)

      // console.log("currentData",currentData)
      // console.log("bubblePosition",bubblePosition)
    } else {
      // console.log("currentDataE",currentData)
      let arr = [...predictions]
      // let p = arr.shift()
      // arr.splice(1, 0, p);
      setCurrentData(arr)
    }
    //     if (big) {
    // console.log(
    //       'big', big.querySelector(".block_name").innerHTML
    //     )
    //     }

    // const predictions_copy = [...currentData]
    // setPredictions_sorted(
    //     predictions_copy.sort(function (a, b) {
    //       return a.rank - b.rank
    //     })
    // )
  }, [predictions, isBubbleClick])

  useEffect(() => {
    if (!isReady || isBubbleClick) return
    if (!currentData) {
      dispatch(allAnimationStart())
      // dispatch(sendBtnStart())
      return
    }

    const vh = (coef) => window.innerHeight * (coef / 100)
    const vw = (coef) => window.innerWidth * (coef / 100)

    setBig(q('li')[0])

    let startAngle = -90
    const length = q('li').length
    const angle = 360 / (length - 1)
    const rad = Math.PI / 180

    tl_intro.current = gsap.timeline({
      paused: true,
      onStart: () => dispatch(allAnimationStop()),
      onComplete: () => dispatch(allAnimationStart()),
    })

    tl_intro.current.to(big, {
      top: '50%',
      left: '50%',
      width: '30vh',
      height: '30vh',
      duration: 1,
      scale: 1,
      ease: 'back',
      onStart: () => {
        big.style.zIndex = 'auto'
        big.classList.add(`active`)
      },
    })

    for (let i = 1; i < length; i++) {
      q('li')[i].classList.add(`li${i}`)
      tl_intro.current.to(
        q('li')[i],
        {
          x: vh(28) * Math.cos(startAngle * rad),
          y: vh(28) * Math.sin(startAngle * rad),
          top: '50vh',
          left: '50vw',
          scale: 1,
          duration: 1,
          ease: 'back',
        },
        i / 6
      )
      startAngle += angle
    }

    if (bubblesAnimation) {
      tl_intro.current.restart()
    }
  }, [bubblesAnimation, currentData, isReady, isBubbleClick])

  useEffect(() => {
    gsap.to(big, {
      x: 0,
      y: 0,
      xPercent: -50,
      yPercent: -50,
      width: '30vh',
      height: '30vh',
      duration: 1,
    })
  }, [big])

  useEffect(() => {
    const vh = (coef) => window.innerHeight * (coef / 100)

    tl_moveDown.current = gsap.timeline({
      paused: true,
      onComplete: () => dispatch(allAnimationStart()),
    })
    if (bubbles) {
      let startAngle = -90
      const angle = 360 / bubbles.length
      const rad = Math.PI / 180

      tl_moveDown.current.to(bubbles, {
        y: vh(0),
        top: '200vh',
        left: '50vw',
        scale: 1,
        stagger: 0.1,
        duration: 2,
      })
      tl_moveDown.current.to(bubbles, {
        top: '15vh',
        left: '10vw',
        width: '17vh',
        height: '17vh',
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0,
        duration: 0.1,
      })
      for (let i = 0; i < bubbles.length; i++) {
        tl_moveDown.current.to(
          bubbles[i],
          {
            top: '50vh',
            left: '50vw',
            width: '17vh',
            height: '17vh',
            xPercent: -50,
            yPercent: -50,
            x: vh(28) * Math.cos(startAngle * rad),
            y: vh(28) * Math.sin(startAngle * rad),
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'back',
          },
          3.05 + i / 6
        )
        startAngle += angle
      }
    }
    if (bubbles) {
      tl_moveDown.current.play()
      console.log(all)
    }
  }, [bubbles])

  const clickBubble = (e) => {
    if (e.target.classList.contains('active') || !e.target.classList.contains('liAnim')) return
    if (!allowAnimation) return
    dispatch(allAnimationStop())
    dispatch(setIsBubbleClick(true))
    dispatch(setChatQuery(e.target.querySelector('.block_name').innerText))

    let all = q('li')
    all.forEach((el, index) => {
      if (el.classList.contains('active')) {
        setBubblePosition(index)
      }
      el.classList.remove('active')
      e.target.classList.add('active')
    })

    let arr = []
    let all_new = q('li')
    all_new.forEach((el) => {
      if (!el.classList.contains('active')) {
        arr.push(el)
      }
    })
    setBubbles(arr)
    setBig(e.target)
  }

  const hoverBubble = (e) => {
    tl_hover.current = gsap.timeline({ paused: true })
    tl_hover.current.set(e.target.querySelector('.short_description'), {
      display: 'flex',
      opacity: 0,
    })
    tl_hover.current.to(e.target.querySelector('.short_description'), {
      y: 50,
      autoAlpha: 1,
      duration: 0.5,
    })
    if (!e.target.classList.contains('active')) {
      tl_hover.current.play()
    }
  }
  const hoverBubbleStop = () => {
    tl_hover.current.reverse()
  }

  const clickMore = () => {
    tl_more.current = gsap.timeline({ paused: true })
    tl_more.current.to(q('.liAnim.active .short_description'), {
      y: 50,
      autoAlpha: 0,
      duration: 0.5,
    })
    tl_more.current.to(
      q('.liAnim.active .long_description'),
      { y: -50, autoAlpha: 1, duration: 0.5 },
      '<+=0.25'
    )
    tl_more.current.play()
  }

  const clickLess = () => {
    tl_more.current.reverse()
  }

  return (
    <>
      <div className={styles.bubbles}>
        <ul ref={el}>
          {currentData &&
            currentData.map((el, index) => (
              <li
                key={index}
                onClick={clickBubble}
                onMouseEnter={hoverBubble}
                onMouseLeave={hoverBubbleStop}
                className={'liAnim'}
              >
                <div className={styles.block_name + ' block_name'}>{el.block_name}</div>

                <div className={styles.short_description + ' short_description'}>
                  {el.short_description}
                  <div className={styles.more + ' more'} onClick={clickMore}>
                    more...
                  </div>
                </div>

                <div className={styles.long_description + ' long_description'}>
                  {el.long_description}
                  <div className={styles.less + ' less'} onClick={clickLess}>
                    less...
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Bubbles


