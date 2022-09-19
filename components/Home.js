import { useEffect } from 'react'
import Chat from './Chat/Chat'
import Man from './Man/Man'
import Bubbles from './Bubbles/Bubbles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/feutures/bubblesSlicer'

const Home = () => {
  const dispatch = useDispatch()
  const bubbles = useSelector((state) => state.bubbles)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className='inner'>
      {!bubbles.loaded && (
        <div className='loading'>
          <div>loading</div>
        </div>
      )}
      {bubbles.loaded && (
        <div className='main'>
          <Chat />
          <Man />
          <Bubbles />
        </div>
      )}
    </div>
  )
}

export default Home
