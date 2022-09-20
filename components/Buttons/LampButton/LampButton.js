import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import style from './LampButton.module.scss'

const LampButton = () => {

    return (
        <div className={style.wrap}>
            <span>
                <FontAwesomeIcon icon={faLightbulb} />
            </span>
            <div className={style.text}>735</div>
        </div>
    )
}

export default LampButton