import Chat from '../../components/Chat/Chat'
import Man from '../../components/Man/Man'
import Bubbles from '../../components/Bubbles/Bubbles'
import ExitButton from '../../components/Buttons/ExitButton/ExitButton'
import styles from './guide.module.scss'
import ProgressWheel from '../../components/ProgressWheel/ProgressWheel'
import InfoButton from '../../components/Buttons/InfoButton/InfoButton'
import CoachingPanel from '../../components/CoachingPanel/CoachingPanel'
import DropFiles from '../../components/DropFiles'

export default function Guide() {
  return (
    <div className="inner">
      <div className="main">
        <div className={styles.title}>
          The People vs Hall (Mens Rea)
          <div className={styles.infoButton}>
            <InfoButton
              data={{ name: 'KNOWZEE', title: 'Title', description: 'Description' }}
              error={false}
              isLoading={false}
            />
          </div>
        </div>
        <Chat />
        <Man />
        <DropFiles />
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
