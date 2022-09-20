import styles from './CoachingPanel.module.scss'
import LampButton from '../Buttons/LampButton/LampButton'
import UserButton from '../Buttons/UserButton/UserButton'

const CoachingPanel = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.textP}>
          You're almost there, <br />
          you're about to get this badge
        </div>
      </div>
        <span>
          <LampButton />
          <UserButton />
        </span>
    </>
  )
}

export default CoachingPanel