import styles from './UserButton.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const UserButton = () => {

    return (
        <div className={styles.wrap}>
            <div className={styles.bg}>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    )
}

export default UserButton