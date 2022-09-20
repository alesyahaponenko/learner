import styles from './ExitButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const ExitButton = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.bg}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </div>
    </div>
  )
}

export default ExitButton