import styles from './Bubbles.module.scss'
import gsap from 'gsap'
import {useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stopMoveBubblesToStartPositions } from '../../store/feutures/bubblesSlicer'

const Bubbles = () => {
  const { predictions, loaded, moveBubblesToStartPositions } = useSelector((state) => state.bubbles)
  const dispatch = useDispatch()

  const [body, setBody] = useState(null)
  const el = useRef()
  const q = gsap.utils.selector(el)
  const tl_intro = useRef(null)
  const tl_more = useRef(null)
  const tl_hover = useRef(null)
  const tl_changeBubbles = useRef(null)

  const predictions_copy = [...predictions]
  const predictions_sorted = predictions_copy.sort(function (a, b) {
    return a[0].rank - b[0].rank
  })

  gsap.config({
    force3D: false,
    nullTargetWarn: false,
  })
  useEffect(() => {
    setBody(document.querySelector('body'))
  },[])

  useEffect(() => {
    if (!loaded) return
    const vh = (coef) => window.innerHeight * (coef / 100)
    const vw = (coef) => window.innerWidth * (coef / 100)

    tl_intro.current = gsap.timeline({
      paused: true,
      onComplete: () => dispatch(stopMoveBubblesToStartPositions()),
    })

    let lenght_el = q('li').length
    let startAngle = -90
    const angle = 180 / (lenght_el - 2)
    const rad = Math.PI / 180

    for (let i = 1; i < lenght_el; i++) {
      tl_intro.current.to(
        q('li')[i],
        {
          opacity: 1,
          x: vw(5) + vh(37) * Math.cos(startAngle * rad),
          y: vw(5) + vh(37) * Math.sin(startAngle * rad),
          duration: 1,
        },
        i / 6
      )
      startAngle += angle
    }
    tl_intro.current.to(
      q('li')[0],
      {
        y: vh(0),
        x: vw(50),
        opacity: 1,
        width: '25vw',
        height: '25vw',
        duration: 1,
        onStart: () => q('li')[0].classList.add('active'),
      },
      '<+=0.5'
    )

    if (moveBubblesToStartPositions) {
      tl_intro.current.play()
    }
  }, [moveBubblesToStartPositions, q, dispatch, loaded])

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


  const calculatePosition = (element)=>{
    console.log(body)
    const rect = element.getBoundingClientRect();

    const scrollTop  = window.pageYOffset || body.scrollTop  || 0;
    const scrollLeft = window.pageXOffset || body.scrollLeft || 0;

    const clientTop  = body.clientTop  || 0;
    const clientLeft = body.clientLeft || 0;

    return {
      top: Math.round(rect.top + scrollTop - clientTop),
      left: Math.round(rect.left + scrollLeft - clientLeft),
      height: rect.height,
      width: rect.width,
    };
  }

  const clickBubble = (e) => {
    if (e.target.classList.contains('active') || !e.target.classList.contains('liAnim')) return
    let positionSmall = calculatePosition(e.target)
    let positionBig = calculatePosition(q('.liAnim.active')[0])

    tl_changeBubbles.current = gsap.timeline({ paused: true })
    tl_changeBubbles.current.to(e.target, {
      width: positionBig.width,
      height: positionBig.height,
      left: ()=>positionBig.left - positionSmall.left,
      top: ()=>positionBig.top - positionSmall.top,
      onStart:()=>e.target.classList.add('active')
    })
    tl_changeBubbles.current.to(q('.liAnim.active')[0], {
      width: '17vh',
      height: '17vh',
      left: () => positionSmall.left - positionBig.left,
      top: () => positionSmall.top - positionBig.top,
      onComplete: () => {
        q('.liAnim.active')[0].classList.remove('active')
      },
    })
    tl_changeBubbles.current.play()

  }

  return (
    <>
      <div className={styles.bubbles}>
        <ul ref={el}>
          {predictions_sorted &&
            predictions_sorted.map((el, index) => (
              <li
                key={index}
                onClick={clickBubble}
                onMouseEnter={hoverBubble}
                onMouseLeave={hoverBubbleStop}
                className={'liAnim'}
              >
                <div className='block_name'>{el[0].block_name}</div>

                <div className='short_description'>
                  {el[0].short_description}
                  <div className='more' onClick={clickMore}>
                    more...
                  </div>
                </div>

                <div className='long_description'>
                  {el[0].long_description}
                  <div className='less' onClick={clickLess}>
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
