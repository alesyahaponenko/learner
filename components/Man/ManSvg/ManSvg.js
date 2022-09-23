import React, { useEffect, useRef } from 'react'
import styles from './ManSvg.module.scss'
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin'
import { useDispatch, useSelector } from 'react-redux'
import { startBubblesMoves, stopMouthAnimation } from '../../../store/feutures/bubblesSlicer'

gsap.registerPlugin(MorphSVGPlugin)

const Icon = () => {
  const tl_Mouth = useRef(null)
  const { startManAnimation, mouseCoordinate, audio } = useSelector((state) => state.bubbles)
  const dispatch = useDispatch()
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const audioRef = useRef(null)

  useEffect(() => {

    tl_Mouth.current = gsap.timeline({
      paused: true,
      yoyo: true,
      repeat: 3,
      onComplete: () => {
        dispatch(stopMouthAnimation(0))
        dispatch(startBubblesMoves(1))
      },
    })
    tl_Mouth.current.to('.mouth', {
      duration: 0.3,
      morphSVG:
        'M38.5,38.3c0.9,0.1,1.9,0.1,2.9,0c1.3-0.1,1.8,2.7,0.6,3.2c-1.3,0.5-2.7,0.5-4,0C36.7,41,37.2,38.1,38.5,38.3z',
    })
    tl_Mouth.current.to('.mouth', {
      duration: 0.3,
      morphSVG:
        'M38.7,39.6c0.7-0.6,1.2-1.4,2.9,0c1,0.8,1.8,0.9,0.6,1.4c-1.3,0.5-2.7,0.5-4,0C36.9,40.5,37.6,40.6,38.7,39.6z',
    })
    tl_Mouth.current.to('.mouth', {
      duration: 0.3,
      morphSVG:
          'M37.6,38.6c1.2-2.1,2.8-2.1,4.5-0.3c0.8,0.9,0.5,2.1-0.7,2.4c-1,0.3-2,0.3-3,0C37.6,40.4,37.2,39.4,37.6,38.6z',
    })
    tl_Mouth.current.to('.mouth', {
      duration: 0.3,
      morphSVG:
        'M34.8,37.6c0,0,5.2,1.7,10.1-0.1C43.3,41.9,37,42.1,34.8,37.6z',
    })
    tl_Mouth.current.totalDuration(audioRef.current.duration)
    if (startManAnimation) {
      tl_Mouth.current.play()
      //audioRef.current.play()
    }
  }, [startManAnimation, dispatch])

  useEffect(() => {
    gsap.to(ref1.current, { x: mouseCoordinate.x, y: mouseCoordinate.y, duration: 1 })
    gsap.to(ref2.current, { x: mouseCoordinate.x, y: mouseCoordinate.y, duration: 1 })
  }, [mouseCoordinate])

  return (
    <>
      <audio src={`https://storage.cloud.google.com/knowzee/${audio}`} ref={audioRef}></audio>
      <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          x='0'
          y='0'
          enableBackground='new 0 0 78.1 77.9'
          version='1.1'
          viewBox='0 0 78.1 77.9'
          xmlSpace='preserve'
      >
        <defs>
          <circle id='SVGID_1_' cx='38.9' cy='38.8' r='36.7'></circle>
        </defs>
        <clipPath id='SVGID_00000026121104897447369480000008746255667722279821_'>
          <use overflow='visible' xlinkHref='#SVGID_1_'></use>
        </clipPath>
        <g clipPath='url(#SVGID_00000026121104897447369480000008746255667722279821_)'>
          <path
              d='M70.2 111.3c-.3-1-.8-1.9-1.1-2.8h1.5v.1C71.9 64 56.7 51.9 56.7 51.9l-.1.1v-.1c-16.3-2.8-33.4.4-33.4.4v.1C21.8 54.1 7.8 68 5.6 78.4c-1.9 8.7 10 14.9 19.3 18.2.4-.8.8-1.7 1.2-2.5 1.9 1.8 3.3 4 6 4.6 1.4.3 3-.2 2.5-1.5.7.1 1.6.3 2-.5s-.3-1.4-1-1.9c.7 0 1.5 0 1.7-.7s-.1-1.2-.7-1.6c.9-.2 1.7-.6 1.2-1.4 0-.1-.1-.1-.2-.2 7.7.2 14.1-1.3 14.1-1.3.6-3 1.7-11.2 2.7-19.2 4.3 7 6.8 29.6 7.7 38.1h.7c-.4.6-.7 1.3-.7 2.1 0 1.6-2 3.1-2.2 3.6 1.3.9 2.2-.4 3.1-1.8.4-.7.7-.8.9-.7v.8c-.3 1.2-.6 2.4-.8 3.7-.1.6-.2 1.2.1 1.8.1.1.2.1.3.1.8-.4 1-1.4 1.2-2.2.1-.5.3-1 .4-1.4 0 .9-.2 1.8-.3 2.7-.2.8-.4 1.8-.1 2.6.3.8.8.4 1.1-.1v.3c0 .2.3.3.4.2 2.5-1.2 2.8-5.2 2.4-7.8 1.8 1.3.2 3.4.9 5 0 .1.2.2.3.1 1.7-1.2.9-4.6.4-6.2zM17 79.5c-.9-2.1 4.7-7.9 7.6-12.2.8 6.6 1.8 13.6 2.5 17.9-4.3-1.8-9.4-4.2-10.1-5.7z'
              className={styles.st1}
          ></path>
          <path
              d='M44.7 50.4c0 2.9-2.2 5.2-5 5.2s-5-2.3-5-5.2v-6.6c0-2.9 2.2-5.2 5-5.2s5 2.3 5 5.2v6.6z'
              className={styles.st2}
          ></path>
          <path
              d='M40.3 59.6c0 .4-.3.7-.7.7s-.7-.3-.7-.7.3-.7.7-.7.7.3.7.7zM40.3 67.3c0 .4-.3.7-.7.7s-.7-.3-.7-.7.3-.7.7-.7c.4 0 .7.3.7.7zM40.2 82.7c0 .4-.3.7-.7.7s-.7-.3-.7-.7c0-.4.3-.7.7-.7.4-.1.7.3.7.7zM40.3 75c0 .4-.3.7-.7.7s-.7-.3-.7-.7c0-.4.3-.7.7-.7.4-.1.7.2.7.7z'
              className={styles.st3}
          ></path>
          <path
              d='M34.4 47.2l-4.1 4.3 3.4 9 5.8-4.9c0-.1-4.5-4.8-5.1-8.4zM44.7 47.2l4.1 4.3-3.4 9-5.8-4.9c-.1-.1 4.4-4.8 5.1-8.4z'
              className={styles.st4}
          ></path>
          <path
              d='M51.4 35.9c0 4.1-4.3 7.4-7.2 8.9s-5.4 1-5.4 1c-11.5-2.6-10.7-8.1-11.3-12.6-.3-2.2-.6-6.4.4-11.5.1-.7.3-1.3.6-1.9 1.8-3.7 6-5.1 6-5.1 2.5-.9 5.4-1.1 8-.6 3.8.7 6.7 2.6 7.7 6.5.3 1.2.5 2.5.6 3.8.3 2.6.5 5.2.6 7.9-.1 1.2-.1 2.4 0 3.6z'
              className={styles.st5}
          ></path>
          <path
              d='M39.3 24.5s-.9-.8-.8 2.2c0 3 .4 6.1.4 6.1s-2.1-1-1.3.6c.4.9 1.3 1.3 2.2 1.4.8.2 1.3-.1 1.8-.7.2-.2 1.4-1.6.9-1.9-.2-.2-1.2.3-1.5.4 0 .1-.3-8.9-1.7-8.1z'
              className={styles.st6}
          ></path>
          <path
              d='M42.7 22.4s5.2-1 6.8 2.8c0 0-5.8-1.7-6.9-.9l.1-1.9zM36.5 22.8s-5.1-1.4-7 2.3c0 0 5.9-1.4 7-.4v-1.9z'
              className={styles.st7}
          ></path>
          <g>
            <path
                d='M30.7 28.9c.1 1.5 1.5 2.6 3.2 2.5s2.9-1.4 2.8-2.9c-.1-1.5-1.5-2.6-3.2-2.5-1.6.1-2.9 1.4-2.8 2.9z'
                className={styles.st3}
            ></path>
            <g ref={ref1}>
              <path
                  d='M35.7 28.5c.1 1.3-.7 2.5-1.7 2.5-1 .1-1.9-.9-2-2.3-.1-1.3.7-2.5 1.7-2.5 1-.1 1.9.9 2 2.3z'
                  className={styles.st8}
              ></path>
              <path
                  d='M35.2 28.5c.1.9-.5 1.7-1.2 1.8-.7 0-1.4-.7-1.4-1.6-.1-.9.5-1.7 1.2-1.8.7-.1 1.3.7 1.4 1.6z'
                  className={styles.st7}
              ></path>
              <path
                  d='M35.2 26.9c0 .3-.3.5-.7.5s-.7-.2-.7-.4c0-.3.3-.5.7-.5.3-.1.6.1.7.4z'
                  className={styles.st3}
              ></path>
            </g>
          </g>
          <g>
            <path
                d='M42.7 28.5c.1 1.5 1.5 2.6 3.2 2.5s2.9-1.4 2.8-2.9c-.1-1.5-1.5-2.7-3.2-2.5-1.6.1-2.9 1.4-2.8 2.9z'
                className={styles.st3}
            ></path>
            <g ref={ref2}>
              <path
                  d='M47.3 28.1c.1 1.3-.7 2.5-1.7 2.5-1 .1-1.9-.9-2-2.3-.1-1.3.7-2.5 1.7-2.5s1.9 1 2 2.3z'
                  className={styles.st8}
              ></path>
              <path
                  d='M46.7 28.2c.1.9-.5 1.7-1.2 1.8-.7 0-1.4-.7-1.4-1.6-.1-.9.5-1.7 1.2-1.8.7-.1 1.4.6 1.4 1.6z'
                  className={styles.st7}
              ></path>
              <path
                  d='M46.7 26.6c0 .3-.3.5-.7.5s-.7-.2-.7-.4c0-.3.3-.5.7-.5.4-.1.7.1.7.4z'
                  className={styles.st3}
              ></path>
            </g>
          </g>
          <path
              d='M55.1 12.2c-.7.9-1.8 1.9-3 2.1 1-1 1.9-2.4 1.8-3.9 0-.1-.1-.1-.1-.1-.2.1-.4.3-.5.4-.9.8-2.4.8-3.4.4-1.9-.7-3.4-2-5.1-3C43 7 40.9 6.3 38.7 6.4c-1.2 0-2.3.3-3.4.7-2.7 1-5.9 2.9-6.6 5.9-.1.4-.1.8-.1 1.3 0 .3.2 1.1.1 1.3-.1.1.1.2.1.2s.1 0 .1-.1v-.1c1.3-1 3.4 3 4.2 3.6 3 2.5 7.2 2.8 10.7 1.9 3.9-1.1 8.3-3.8 10.6-7.1.4-.5.7-1.1 1-1.7 0-.1-.2-.2-.3-.1z'
              className={styles.st9}
          ></path>
          <path
              d='M50.9 27.4s2.5-5.7 4.6-1.2c1.6 3.6-1.1 7-3.3 6.8-2.3-.3-1.3-5.6-1.3-5.6z'
              className={styles.st10}
          ></path>
          <path
              d='M51 28.2s1.9-3.6 2.8-2.3c1 1.3 1 3.1 1 3.1s-.7-1.9-2-.7c0 0 1.8 3-1.2 2.4 0 0-1.3-.8-.6-2.5z'
              className={styles.st2}
          ></path>
          <path
              d='M31.5 15.4s.3 4.6-1.6 6.9c-1.9 2.3-2.1 6.8-2.1 6.8s-7.1-9 1-14.3c-.1 0 1.5-.6 2.7.6zM47 17.2s3.3 4.4 4 10.6c0 0 4.6-6.9.2-12.6 0 0-4.8-2.1-4.2 2z'
              className={styles.st9}
          ></path>
          <g>
            <path
                d='M27.9 28.2s-2.5-5.7-4.6-1.2c-1.6 3.6 1.1 7 3.3 6.8 2.3-.2 1.3-5.6 1.3-5.6z'
                className={styles.st10}
            ></path>
            <path
                d='M27.7 29.1s-1.9-3.6-2.8-2.3c-1 1.3-1 3.1-1 3.1s.7-1.9 2-.7c0 0-1.8 3 1.2 2.4.1 0 1.4-.9.6-2.5z'
                className={styles.st2}
            ></path>
          </g>
          <g>
            <path
                d='M35.5 25.5c-1-.2-2.1-.2-3.1-.2-.6 1-1.2 2.1-1.7 3.3-.3.8-.7 1.7-.8 2.6 1 .9 2.2 1.2 3.5 1.2.5-2.4.9-4.9 2.1-6.9zM48.6 25.3c-1.1-.1-2.1 0-3.1.1-.5 1.1-1 2.2-1.4 3.4-.3.8-.5 1.7-.6 2.6 1 .8 2.3.9 3.6.8.4-2.3.5-4.9 1.5-6.9z'
                className={styles.st11}
            ></path>
            <path
                d='M51.2 30c1-3 .7-4.3.7-4.4l-.1-.2-.2-.1c-.2-.1-4.5-1.8-9.2.4-.5.2-1 .5-1.4.8v-.1l-1.7.1v-.1l-.2-.1c-.5-.3-1-.5-1.6-.7-4.8-1.8-9.1.2-9.3.2l-.2.1-.1.2c0 .1-.2 1.4 1 4.4.4 1.1 1.3 1.8 2.4 2.3 1.4.5 2.9.4 3 .4 3.4-.4 4-2 4.4-3.1 0-.1 0-.1.1-.2.3-.8.4-1.4.5-1.9.3-.1.8-.2 1.5 0 .1.6.3 1.3.7 2.1 0 .1.1.1.1.2.5 1.1 1.2 2.7 4.6 2.8.1 0 1.5 0 2.9-.6.9-.6 1.7-1.5 2.1-2.5zM34 32s-1.3.1-2.5-.3c-.9-.3-1.5-.9-1.9-1.7-.8-1.9-.9-3.1-.9-3.5 1-.4 4.5-1.5 8.2-.1.4.2.8.3 1.2.5 0 .4-.1 1.3-.5 2.5 0 .1 0 .1-.1.2-.3 1-.7 2.1-3.5 2.4zm14.5-.5c-1.2.5-2.5.5-2.5.5-2.8-.1-3.3-1.2-3.7-2.2 0-.1-.1-.1-.1-.2-.5-1.1-.6-2.1-.7-2.5.4-.2.8-.4 1.1-.6 3.7-1.7 7.2-.7 8.2-.4 0 .5 0 1.6-.7 3.6-.2.7-.7 1.4-1.6 1.8z'
                className={styles.st12}
            ></path>
          </g>
          <path
              d='M34.8,37.6 c0,0,5.2,1.7,10.1-0.1C43.3,41.9,37,42.1,34.8,37.6z'
              className={styles.st13 + ' mouth'}
          ></path>
        </g>
      </svg>
    </>
  )
}

export default React.memo(Icon)
