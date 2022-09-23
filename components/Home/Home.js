import { useEffect } from 'react'
import Chat from '../Chat/Chat'
import Man from '../Man/Man'
import Bubbles from '../Bubbles/Bubbles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/feutures/bubblesSlicer'
import ExitButton from '../Buttons/ExitButton/ExitButton'
import styles from './Home.module.scss'
import ProgressWheel from '../ProgressWheel/ProgressWheel'
import InfoButton from '../Buttons/InfoButton/InfoButton'
import CoachingPanel from "../CoachingPanel/CoachingPanel";

const Home = () => {
  const dispatch = useDispatch()
  const bubbles = useSelector((state) => state.bubbles)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

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
