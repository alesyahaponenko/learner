import Chat from '../Chat/Chat'
import Man from '../Man/Man'
import Bubbles from '../Bubbles/Bubbles'
import ExitButton from '../Buttons/ExitButton/ExitButton'
import styles from './Home.module.scss'
import ProgressWheel from '../ProgressWheel/ProgressWheel'
import InfoButton from '../Buttons/InfoButton/InfoButton'
import CoachingPanel from '../CoachingPanel/CoachingPanel'

const Home = () => {
  return (
    <div className="inner">
      <div className="main">
        <div className={styles.title}>
          The People vs Hall (Mens Rea)
          <div className={styles.infoButton}>
            <InfoButton />
          </div>
        </div>
        <Chat />
        <Man />
        <Bubbles />
        <ProgressWheel />
        <div className={styles.exitBtn}>
          <ExitButton />
        </div>
        <div className={styles.coachingPanel}>
          <CoachingPanel />
        </div>
      </div>
    </div>
  )
}

export default Home
