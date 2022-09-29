import Chat from '../Chat/Chat'
import Avatar from '../Avatar/Avatar'
import Bubbles from '../Bubbles/Bubbles'
import styles from './Home.module.scss'
import ProgressWheel from '../ProgressWheel/ProgressWheel'
import CoachingPanel from '../CoachingPanel/CoachingPanel'

const Home = () => {
  return (
    <div className="inner">
      <div className="main">
        <Chat />
        <Avatar />
        <Bubbles />
        <ProgressWheel />
        <div className={styles.coachingPanel}>
          <CoachingPanel />
        </div>
      </div>
    </div>
  )
}

export default Home
