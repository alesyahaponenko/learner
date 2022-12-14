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
  const {
    isBubbleClick,
    preloadAnimation,
    isPredictionsLoading,
    bubblesAnimation,
    predictions,
    allowAnimation,
    isReady,
    chatQuery,
    messageColorId,
  } = useSelector((state) => state.bubbles)
  const all = useSelector((state) => state.bubbles)
  const dispatch = useDispatch()

  const [currentData, setCurrentData] = useState(null)
  const [bubblePosition, setBubblePosition] = useState(0)
  const [text, setText] = useState('')
  const [changeBubble, setChangeBubble] = useState(false)
  const [predictions_sorted, setPredictions_sorted] = useState(null)
  const el = useRef()
  const q = gsap.utils.selector(el)
  const tl_intro = useRef(null)
  const tl_more = useRef(null)
  const tl_hover = useRef(null)
  const tl_moveDown = useRef(null)
  const tl_loadAnim = useRef(null)

  const [bubbles, setBubbles] = useState(null)
  const [big, setBig] = useState(null)

  gsap.config({
    force3D: false,
    nullTargetWarn: false,
  })

  useEffect(() => {
    if (predictions && isBubbleClick) {
      let arr = [...predictions]
      arr.splice(bubblePosition, 0, arr.shift())
      setCurrentData(arr)
    } else {
      let arr = [...predictions]
      setCurrentData(arr)
    }
  }, [predictions, isBubbleClick])

  useEffect(() => {
    if (isPredictionsLoading) {
      let all = q('li').length
      for (let i = 0; i < all; i++) {
        gsap.to(q('li')[i].querySelector('.block_name'), { opacity: 0, duration: 0.2 })
      }
      gsap.to('.load', { autoAlpha: 1, duration: 1 })
    } else {
      let all = q('li').length
      for (let i = 0; i < all; i++) {
        gsap.to(q('li')[i].querySelector('.block_name'), { opacity: 1, duration: 1 })
      }
      gsap.to('.load', { autoAlpha: 0, duration: 1 })
    }
    console.log('isPredictionsLoading', isPredictionsLoading)
  }, [isPredictionsLoading, predictions])

  useEffect(() => {
    if (!isReady || isBubbleClick) return
    if (!currentData) {
      dispatch(allAnimationStart())
      console.log('!currentData')
      // dispatch(sendBtnStart())
      return
    }

    setBig(q('li')[0])

    const vh = (coef) => window.innerHeight * (coef / 100)

    tl_intro.current = gsap.timeline({
      paused: true,
      onStart: () => dispatch(allAnimationStop()),
      onComplete: () => {
        dispatch(allAnimationStart())
      },
    })
    if (big) {
      big.classList.add('active')
      big.style.zIndex = '0'

      let all = q('li').length
      let startAngle = -90
      const angle = 360 / (all - 1)
      const rad = Math.PI / 180

      tl_intro.current.to(big, {
        top: '50%',
        left: '50%',
        width: '30vh',
        height: '30vh',
        zIndex: 0,
        duration: 1,
        scale: 1,
        ease: 'back',
      })

      for (let i = 1; i < all; i++) {
        tl_intro.current.to(
          q('li')[i],
          {
            x: vh(28) * Math.cos(startAngle * rad),
            y: vh(28) * Math.sin(startAngle * rad),
            top: '50vh',
            left: '50vw',
            scale: 1,
            zIndex: () => {
              if (i < 6) {
                return i
              } else {
                return all - i
              }
            },
            duration: 1,
            ease: 'back',
          },
          i / 6
        )
        startAngle += angle
      }
    }
    if (bubblesAnimation) {
      tl_intro.current.restart()
    }
  }, [big, bubblesAnimation, currentData, isReady, isBubbleClick])

  useEffect(() => {
    gsap.to(big, {
      x: 0,
      y: 0,
      xPercent: -50,
      yPercent: -50,
      width: '30vh',
      height: '30vh',
      duration: 1,
      zIndex: 0,
    })
  }, [big])

  // if bubble click
  useEffect(() => {
    const vh = (coef) => window.innerHeight * (coef / 100)

    tl_moveDown.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        dispatch(allAnimationStart())
        setChangeBubble(false)
      },
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
            // zIndex: () => {
            //   if (i < 6) {
            //     return i
            //   } else {
            //     return (all - i)
            //   }
            // },
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
    }
  }, [bubbles])

  useEffect(() => {
    if (bubbles && !changeBubble) {
      bubbles.forEach((el) => {
        el.classList.remove('bubble_color')
      })
      if (messageColorId && messageColorId != chatQuery.length - 1) {
        let num = parseInt(messageColorId) + 1
        if (num >= 0) {
          let numBubble = parseInt(chatQuery[num].numBubble)
          bubbles[numBubble - 1].classList.add('bubble_color')
        }
      }
    }
  }, [messageColorId])

  useEffect(() => {
    if (bubblePosition) {
      dispatch(
        setChatQuery({
          id: chatQuery.length ? chatQuery.at(-1).id + 1 : 0,
          text: text,
          numBubble: bubblePosition,
          date: new Date().toLocaleString(),
        })
      )
    }
  }, [bubblePosition])

  const clickBubble = (e) => {
    if (e.target.classList.contains('active') || !e.target.classList.contains('liAnim')) return
    if (!allowAnimation) return
    dispatch(allAnimationStop())
    dispatch(setIsBubbleClick(true))
    setChangeBubble(true)

    let all = q('li')
    all.forEach((el) => {
      el.classList.remove('active')
    })
    e.target.classList.add('active')

    let arr = []
    let all_new = q('li')
    all_new.forEach((el, index) => {
      el.classList.remove('bubble_color')
      if (!el.classList.contains('active')) {
        arr.push(el)
      } else {
        setBubblePosition(index)
      }
    })

    setText(e.target.querySelector('.block_name').innerText)
    setBubbles(arr)
    setBig(e.target)
  }

  const hoverBubble = (e) => {
    tl_hover.current = gsap.timeline({ paused: true })
    tl_hover.current.set('.bubbles', { zIndex: 0 })
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

  const hoverBubbleStop = (e) => {
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
      <div className={styles.bubbles + ' bubbles'}>
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
                {index === bubblePosition ? <div className="load">loading...</div> : null}
                <div className={styles.block_name + ' block_name'}>{el.block_name}</div>

                <div
                  className={
                    styles.short_description + ' short_description' + ' ' + isPredictionsLoading
                  }
                >
                  {!isPredictionsLoading ? el.short_description : null}
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
