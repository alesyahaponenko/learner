import styles from './Man.module.scss'
import gsap from 'gsap'
import ManSvg from './ManSvg/ManSvg'

const Man = () => {
  return (
    <>
      <div className={styles.manWrap}>
        <ManSvg />
      </div>
    </>
  )
}

export default Man
