import { useLayoutEffect, useRef, useState } from 'react'
import styles from './Chat.module.scss'
import gsap from 'gsap'

const Chat = () => {
  const [newMessage, setNewMessage] = useState('')
  const [chatMessage, setShatMessage] = useState([])
  const [id, setId] = useState(0)

  const textRef = useRef(null)
  const modal = useRef(null)
  const chatInner = useRef(null)
  const closeModalRef = useRef(null)
  const tl_Modal = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newMessage.trim().length) return
    setId(id + 1)
    setNewMessage('')
    chatMessage.push({ id: id, text: newMessage, date: new Date().toLocaleString() })
  }

  const closeModal = () => {
    tl_Modal.current.reverse()
  }

  const openModal = () => {
    tl_Modal.current.play()
  }

  useLayoutEffect(() => {
    tl_Modal.current = gsap.timeline({ paused: true })
    tl_Modal.current.fromTo(modal.current, { height: '0' }, { height: '500px', duration:1 })
    tl_Modal.current.fromTo(
      modal.current,
      { boxShadow: 'none' },
      { boxShadow: '0px 0px 30px 14px rgba(0, 0, 0, 0.10)',duration:1 }, "<+=0.1"
    )
    tl_Modal.current.to(chatInner.current, { autoAlpha: 1 }, "<+=0.2")
    tl_Modal.current.to(closeModalRef.current, { autoAlpha: 1 }, "<+=0.3")
  }, [])

  return (
    <>
      <div className={styles.chatStartButton} onClick={openModal}>Chat</div>
      <div className={styles.chatWrap} ref={modal}>
        <div className={styles.closeModal} ref={closeModalRef}>
          <div className={styles.closeBtn} onClick={closeModal}>
            <span></span>
            <span></span>
          </div>
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
          <form onSubmit={handleSubmit}>
            <input
              className={styles.inputField}
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your question here..."
            />
            <button className={styles.btn} type="submit" disabled={!newMessage}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Chat
