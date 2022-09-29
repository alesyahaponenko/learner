import styles from './CoachingPanel.module.scss'
import LampButton from '../Buttons/LampButton/LampButton'

const CoachingPanel = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.textP}>
          You&apos;re almost there, <br />
          you&apos;re about to get this badge
        </div>
        <span>
          <LampButton />

        </span>
      </div>

    </>
  )
}

export default CoachingPanel