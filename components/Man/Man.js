import styles from './Man.module.scss'
import gsap from 'gsap'
import ManSvg from './ManSvg/ManSvg'
import InfoButton from '../Buttons/InfoButton/InfoButton'

const Man = () => {
  return (
    <>
      <div className={styles.manWrap}>
        <div className={styles.bor_r}>
          <ManSvg />
        </div>
        <div className={styles.nameWrap}>
          <div className={styles.name}>GUIDE NAME</div>
          <div className={styles.infoButton}>
            <InfoButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default Man
