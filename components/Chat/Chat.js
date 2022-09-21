import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './Chat.module.scss'
import gsap from 'gsap'
import {useDispatch, useSelector} from 'react-redux'
import { startMouthAnimation } from '../../store/feutures/bubblesSlicer'
import Image from 'next/image'

const Chat = () => {
  const { startManAnimation } = useSelector((state) => state.bubbles)
  const [newMessage, setNewMessage] = useState('')
  const [chatMessage, setShatMessage] = useState([])
  const [id, setId] = useState(0)

  const textRef = useRef(null)

  const chatInner = useRef(null)
  const tl_Ball = useRef(null)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newMessage.trim().length) return
    if (startManAnimation) return
    setId(id + 1)
    setNewMessage('')
    chatMessage.push({ id: id, text: newMessage, date: new Date().toLocaleString() })
    dispatch(startMouthAnimation(1))
    tl_Ball.current.restart()
  }

  useEffect(() => {

    tl_Ball.current = gsap.timeline({ paused: true })
    tl_Ball.current.to(".tube_ball", {
      opacity:1,
    })
    tl_Ball.current.to(".tube_ball", {
      top:'-200px',
      duration:0.5
    })
    tl_Ball.current.to(".tube_ball", {
      scaleY: 0,
      duration:0.1,
      top:'-320px',
      opacity:0,
      transformOrigin: '0% 100%'
    },"<+=0.38")
  }, [])

  return (
    <>
      <div className={styles.tube + ' tube'}>
        <div className={styles.tube_bg}>
          <Image src="/tube.png" width={250} height={331} />
        </div>
        <div className={styles.tube_ball + ' tube_ball'}>
          <Image src="/tube_ball.png" width={250} height={331} />
        </div>
      </div>
      <div className={styles.chatWrap} >
        <div className={styles.closeModal} >
          <span>Conversation</span>
        </div>
        <div className={styles.chatInner} ref={chatInner}>
          <div className={styles.chatWindow} ref={textRef}>
            <ul>
              {chatMessage.map((el) => (
                <li key={el.id}>
                  <div className={styles.textMessage}>
                    {el.text} <span>{el.date}</span>
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
              placeholder="Type your question here..."
            />
            <button className={styles.btn} type="submit" disabled={!newMessage}>
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Chat
