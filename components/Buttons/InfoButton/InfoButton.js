import styles from './InfoButton.module.scss'
import gsap from 'gsap'
import {useEffect, useRef} from 'react'

const ExitButton = ({ data, isLoading, error }) => {

    const modalRef = useRef(null)
    const tlRef = useRef(null)

    useEffect(()=>{
        let left = modalRef.current.getBoundingClientRect().left
        let top = modalRef.current.getBoundingClientRect().top
        tlRef.current = gsap.timeline({paused: true})
        tlRef.current.to(modalRef.current, {autoAlpha: 1, top: ()=>innerHeight*5/100-top})
    },[])

    const openModal = ()=>{
        tlRef.current.play()
    }
    const closeModal = ()=>{
        tlRef.current.reverse()
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
                        <h3>{data.name}</h3>
                        <div className={styles.title}>{data.title}</div>
                        <div className={styles.description}>{data.description}</div>
                    </>
                ) : null}
            </div>
        </div>
      <div className={styles.wrap} onClick={openModal}>
        <div className={styles.infoBtn}>
          <span>i</span>
        </div>
      </div>
    </>
  )
}

export default ExitButton