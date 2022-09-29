import styles from './Reminder.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";

const Reminder = () => {

    return (
        <div className={styles.wrap}>
            <div className={styles.bg}>
                <FontAwesomeIcon icon={faBell} />
            </div>
        </div>
    )
}

export default Reminder