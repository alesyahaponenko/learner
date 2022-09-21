import styles from './ProgressWheel.module.scss'
import Image from 'next/image'

const ProgressWheel = () => {
    return (
        <div className={styles.wrap}>
            {/*<svg width="200" height="200">*/}
            {/*    <g transform="rotate(-90 100 100)">*/}
            {/*        <circle r="70" cx="100" cy="100" fill="transparent" stroke="lightgrey" strokeWidth="0.5rem" strokeDasharray="439.8" strokeDashoffset="0"></circle>*/}
            {/*        <circle r="70" cx="100" cy="100" fill="transparent" stroke="blue" strokeWidth="0.5rem" strokeDasharray="439.8" strokeDashoffset="10">*/}
            {/*        </circle>*/}
            {/*    </g>*/}
            {/*    <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">85%</text>*/}
            {/*</svg>*/}
            <Image
                src="/wheel.png"
                width={300}
                height={300}
                alt=''
            />
        </div>
    )
}

export default ProgressWheel