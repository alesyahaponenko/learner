import styles from './Avatar.module.scss'
import ManSvg from './AvatarSvg/AvatarSvg'
import InfoButton from '../Buttons/InfoButton/InfoButton'
import { useGetAvatarInfoQuery } from '../../store/feutures/avatarApi'

const Avatar = () => {
  const { data, error, isLoading } = useGetAvatarInfoQuery('')

  return (
    <>
      <div className={styles.manWrap}>
        <div className={styles.bor_r}>
          <ManSvg />
        </div>
        <div className={styles.nameWrap}>
          <div className={styles.name}>{isLoading ? <div>...</div> : data.name}</div>
          <div className={styles.infoButton + ' avatarInfoBtn'}>
            <InfoButton data={data} isLoading={isLoading} error={error} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Avatar
