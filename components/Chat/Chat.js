import { useEffect, useRef, useState } from 'react'
import styles from './Chat.module.scss'
import gsap from 'gsap'
import { useDispatch, useSelector } from 'react-redux'
import {
  sendBtnStop,
  sendIsPredictionsLoading,
  sendLoading,
  sendPredictions,
  setAudio,
  setChatQuery,
  setMessageId,
  startMouthAnimation,
} from '../../store/feutures/bubblesSlicer'
import Image from 'next/image'
import { useGetPredictionsQuery } from '../../store/feutures/avatarApi'

const Chat = () => {
  const { send, chatQuery, isBubbleClick } = useSelector((state) => state.bubbles)

  const [newMessage, setNewMessage] = useState('')
  const [query, setQuery] = useState()
  const [skip, setSkip] = useState(true)

  const { data, error, isLoading, isFetching } = useGetPredictionsQuery(query, { skip })

  const textRef = useRef(null)
  const chatInner = useRef(null)
  const tl_Ball = useRef(null)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newMessage.trim().length) return
    setSkip(false)
    dispatch(sendBtnStop())
    setQuery(newMessage)
    dispatch(
      setChatQuery({ id: 0, text: newMessage, numBubble: 0, date: new Date().toLocaleString() })
    )
    setNewMessage('')
    tl_Ball.current.restart()
  }
  useEffect(() => {
    tl_Ball.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        dispatch(startMouthAnimation(1))
      },
    })

    tl_Ball.current.fromTo('.tube', { opacity: '0' }, { opacity: '0', duration: 0.1 })
    tl_Ball.current.fromTo(
      '.tube',
      { y: '30vh' },
      {
        y: () =>
          window.innerHeight > 1000
            ? '12vh'
            : window.innerHeight < 1000 && window.innerHeight > 800
            ? '12vh'
            : window.innerHeight < 800
            ? '10vh'
            : 0,
        duration: 0.3,
      }
    )
    tl_Ball.current.to('.tube_ball', {
      opacity: 1,
    })
    tl_Ball.current.to(
      '.tube_ball',
      {
        top: () =>
          window.innerHeight > 1000
            ? '-10vh'
            : window.innerHeight < 1000
            ? '-9vh'
            : window.innerHeight < 800
            ? '-50vh'
            : 0,
        duration: 0.5,
      },
      '<+=0.25'
    )
    tl_Ball.current.to(
      '.tube_ball',
      {
        duration: 0.8,
        opacity: 0,
        transformOrigin: '0% 100%',
      },
      '<+=0.38'
    )
    tl_Ball.current.to('.tube', { y: '30vh', duration: 0.3 })
    tl_Ball.current.to('.tube', { opacity: '0', duration: 0.1 })
    tl_Ball.current.timeScale(10)
  }, [])

  useEffect(() => {
    if (!data) return
    dispatch(sendLoading(true))
    dispatch(sendPredictions(data.predictions))
    setAudio(data.predictions[0].audio.audio_file_path)
  }, [data])

  useEffect(() => {
    dispatch(sendIsPredictionsLoading(isFetching))
  }, [isFetching])

  useEffect(() => {
    setQuery(chatQuery?.at(-1)?.text)
  }, [chatQuery?.at(-1)?.id])

  const clickChatMessage = (e) => {
    setQuery(e.target.querySelector('.message').innerText)
    dispatch(setMessageId(e.target.dataset.id))
    // console.log('e.target.dataset.id', e.target.dataset.id)
  }

  return (
    <>
      <div className={styles.tube + ' tube'}>
        <div className={styles.tube_bg}>
          <Image src="/tube.png" alt="" width={250} height={331} />
        </div>
        <div className={styles.tube_ball + ' tube_ball'}>
          <Image src="/tube_ball.png" alt="" width={250} height={331} />
        </div>
      </div>
      <div className={styles.chatWrap}>
        <div className={styles.closeModal}>
          <span>Conversation</span>
        </div>
        <div className={styles.chatInner} ref={chatInner}>
          <div className={styles.chatWindow} ref={textRef}>
            <ul>
              {chatQuery.map((el) => (
                <li key={el.id} onClick={clickChatMessage}>
                  <div className={styles.textMessage} data-id={el.id}>
                    <div className={styles.message + ' message'}>{el.text}</div>
                    <span>{el.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.inputField}
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={send ? 'Type your question here...' : null}
              disabled={!send}
            />
            <button className={styles.btn} type="submit" disabled={!newMessage || !send}>
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Chat
