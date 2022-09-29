import styles from './InfoButton.module.scss'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

const ExitButton = ({ data, isLoading, error }) => {
  const modalRef = useRef(null)
  const tlRef = useRef(null)
  const [icon, setIcon] = useState('I')

  useEffect(() => {
    // let left = modalRef.current.getBoundingClientRect().left
    // let top = modalRef.current.getBoundingClientRect().top
    tlRef.current = gsap.timeline({ paused: true })
    tlRef.current.fromTo(
      modalRef.current,
      { top: 100, left: '25vw' },
      { autoAlpha: 1, top: '8vh', left: '25vw' }
    )
  }, [])

  const openModal = (e) => {
    if (modalRef.current.classList.contains('active')) {
      setIcon('I')
      tlRef.current.reverse()
      modalRef.current.classList.remove('active')
    } else {
      setIcon('X')
      modalRef.current.classList.add('active')
      tlRef.current.play()
    }
  }

  const closeModal = () => {
    tlRef.current.reverse()
    setIcon('I')
  }

  return (
    <>
      <div className={styles.modal + ' modal'} ref={modalRef} onClick={closeModal}>
        <div className={styles.modal_inner}>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              <div className={styles.title}>{data.title}</div>
              <div className={styles.description}>{data.description}</div>
            </>
          ) : null}
        </div>
      </div>
      <div className={styles.wrap} onClick={openModal}>
        <div className={styles.infoBtn + ' infoBtn'}>
          <span>{icon}</span>
        </div>
      </div>
    </>
  )
}

export default ExitButton