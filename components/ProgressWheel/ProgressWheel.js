import React, { useEffect, useRef } from 'react'
import styles from './ProgressWheel.module.scss'
import Image from 'next/image'


function Icon() {
  return (
    <div className={styles.wrap}>
      {/*<Image*/}
      {/*    src="/wheel.png"*/}
      {/*    width={300}*/}
      {/*    height={300}*/}
      {/*    alt=''*/}
      {/*/>*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 276.4 271.3"
        version="1.1"
        viewBox="0 0 276.4 271.3"
        xmlSpace="preserve"
      >
        <defs>
          <filter width="115.8" height="68.1" x="134.7" y="68.1" filterUnits="userSpaceOnUse">
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
          </filter>
        </defs>
        <mask width="115.8" height="68.1" x="134.7" y="68.1" maskUnits="userSpaceOnUse">
          <path
            d="M249.5 135.2c0-23.6-7.5-46.6-21.3-65.7l-90.4 65.7h111.7z"
            className={styles.st0 + ' st0'}
          ></path>
        </mask>
        <path
          d="M249.5 135.2c0-23.6-7.5-46.6-21.3-65.7l-90.4 65.7h111.7z"
          className={styles.st1 + ' st1'}
        ></path>
        <defs>
          <filter
            id="Adobe_OpacityMaskFilter_00000079452835887650526520000012105739851929405098_"
            width="93.7"
            height="110.1"
            x="135.8"
            y="27.7"
            filterUnits="userSpaceOnUse"
          >
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
          </filter>
        </defs>
        <mask width="93.7" height="110.1" x="135.8" y="27.7" maskUnits="userSpaceOnUse">
          <path
            fill="#FFF"
            d="M228.2 69.6c-13.9-19.1-33.4-33.3-55.8-40.6l-34.6 106.2 90.4-65.6z"
            filter="url(#Adobe_OpacityMaskFilter_00000079452835887650526520000012105739851929405098_)"
          ></path>
        </mask>
        <path
          d="M228.2 69.6c-13.9-19.1-33.4-33.3-55.8-40.6l-34.6 106.2 90.4-65.6z"
          className={styles.st3 + ' st3'}
        ></path>
        <defs>
          <filter
            id="Adobe_OpacityMaskFilter_00000036964002248471253120000016096082576143909023_"
            width="71.6"
            height="116"
            x="102.2"
            y="22.5"
            filterUnits="userSpaceOnUse"
          >
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
          </filter>
        </defs>
        <mask width="71.6" height="116" x="102.2" y="22.5" maskUnits="userSpaceOnUse">
          <path
            fill="#FFF"
            d="M172.5 29c-22.4-7.3-46.6-7.4-69-.1l34.3 106.3L172.5 29z"
            filter="url(#Adobe_OpacityMaskFilter_00000036964002248471253120000016096082576143909023_)"
          ></path>
        </mask>
        <path
          d="M172.5 29c-22.4-7.3-46.6-7.4-69-.1l34.3 106.3L172.5 29z"
          className={styles.st5 + ' st5'}
        ></path>
        <defs>
          <filter
            id="Adobe_OpacityMaskFilter_00000098195713302597664200000009949945805418235545_"
            width="93.5"
            height="110.2"
            x="46.1"
            y="27.6"
            filterUnits="userSpaceOnUse"
          >
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
          </filter>
        </defs>
        <mask width="93.5" height="110.2" x="46.1" y="27.6" maskUnits="userSpaceOnUse">
          <path
            fill="#FFF"
            d="M103.5 28.9c-22.5 7.2-42 21.4-56 40.4l90.2 65.9-34.2-106.3z"
            filter="url(#Adobe_OpacityMaskFilter_00000098195713302597664200000009949945805418235545_)"
          ></path>
        </mask>
        <path
          d="M103.5 28.9c-22.5 7.2-42 21.4-56 40.4l90.2 65.9-34.2-106.3z"
          className={styles.st7 + ' st7'}
        ></path>
        <defs>
          <filter
            id="Adobe_OpacityMaskFilter_00000093147644710514515270000002273183628193288125_"
            width="115.8"
            height="68.5"
            x="25"
            y="67.8"
            filterUnits="userSpaceOnUse"
          >
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
          </filter>
        </defs>
        <mask width="115.8" height="68.5" x="25" y="67.8" maskUnits="userSpaceOnUse">
          <path
            fill="#FFF"
            d="M47.6 69.2c-13.9 19-21.5 42-21.6 65.6l111.7.5-90.1-66.1z"
            filter="url(#Adobe_OpacityMaskFilter_00000093147644710514515270000002273183628193288125_)"
          ></path>
        </mask>
        <path
          d="M47.6 69.2c-13.9 19-21.5 42-21.6 65.6l111.7.5-90.1-66.1z"
          className={styles.st9 + ' st9'}
        ></path>
        <defs>
          <filter
            id="Adobe_OpacityMaskFilter_00000054225710035904246000000006593137549767167617_"
            width="115.8"
            height="68.1"
            x="25"
            y="134.2"
            filterUnits="userSpaceOnUse"
          >
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
          </filter>
        </defs>
        <mask width="115.8" height="68.1" x="25" y="134.2" maskUnits="userSpaceOnUse">
          <path
            fill="#FFF"
            d="M26 135.2c0 23.6 7.5 46.6 21.3 65.7l90.4-65.7H26z"
            filter="url(#Adobe_OpacityMaskFilter_00000054225710035904246000000006593137549767167617_)"
          ></path>
        </mask>
        <path
          d="M26 135.2c0 23.6 7.5 46.6 21.3 65.7l90.4-65.7H26z"
          className={styles.st11 + ' st11'}
        ></path>
        <defs>
          <filter
            id="Adobe_OpacityMaskFilter_00000085936027657877628020000016855473432257343417_"
            width="93.8"
            height="110.1"
            x="45.9"
            y="132.6"
            filterUnits="userSpaceOnUse"
          >
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
          </filter>
        </defs>
        <mask width="93.8" height="110.1" x="45.9" y="132.6" maskUnits="userSpaceOnUse">
          <path
            fill="#FFF"
            d="M47.3 200.8c13.8 19.1 33.4 33.3 55.8 40.7l34.7-106.2-90.5 65.5z"
            filter="url(#Adobe_OpacityMaskFilter_00000085936027657877628020000016855473432257343417_)"
          ></path>
        </mask>
        <path
          d="M47.3 200.8c13.8 19.1 33.4 33.3 55.8 40.7l34.7-106.2-90.5 65.5z"
          className={styles.st13 + ' st13'}
        ></path>
        <defs>
          <filter
            id="Adobe_OpacityMaskFilter_00000168093915582062283350000014648093457269640333_"
            width="71.6"
            height="116"
            x="101.8"
            y="132"
            filterUnits="userSpaceOnUse"
          >
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
          </filter>
        </defs>
        <mask width="71.6" height="116" x="101.8" y="132" maskUnits="userSpaceOnUse">
          <path
            fill="#FFF"
            d="M103 241.4c22.4 7.3 46.6 7.4 69 .1l-34.3-106.3L103 241.4z"
            filter="url(#Adobe_OpacityMaskFilter_00000168093915582062283350000014648093457269640333_)"
          ></path>
        </mask>
        <path
          d="M103 241.4c22.4 7.3 46.6 7.4 69 .1l-34.3-106.3L103 241.4z"
          className={styles.st15 + ' st15'}
        ></path>
        <defs>
          <filter
            id="Adobe_OpacityMaskFilter_00000103978984671571607440000007345092044101001876_"
            width="93.7"
            height="110.1"
            x="135.8"
            y="132.6"
            filterUnits="userSpaceOnUse"
          >
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
          </filter>
        </defs>
        <mask width="93.7" height="110.1" x="135.8" y="132.6" maskUnits="userSpaceOnUse">
          <path
            fill="#FFF"
            d="M172.2 241.5c22.4-7.3 42-21.5 55.9-40.6l-90.4-65.7 34.5 106.3z"
            filter="url(#Adobe_OpacityMaskFilter_00000103978984671571607440000007345092044101001876_)"
          ></path>
        </mask>
        <path
          d="M172.2 241.5c22.4-7.3 42-21.5 55.9-40.6l-90.4-65.7 34.5 106.3z"
          className={styles.st17 + ' st17'}
        ></path>
        <defs>
          <filter
            id="Adobe_OpacityMaskFilter_00000066511639323848508560000010440227386472992392_"
            width="115.8"
            height="68.5"
            x="134.7"
            y="134.2"
            filterUnits="userSpaceOnUse"
          >
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
          </filter>
        </defs>
        <mask width="115.8" height="68.5" x="134.7" y="134.2" maskUnits="userSpaceOnUse">
          <path
            fill="#FFF"
            d="M227.8 201.3c14-19 21.5-42 21.6-65.6l-111.7-.5 90.1 66.1z"
            filter="url(#Adobe_OpacityMaskFilter_00000066511639323848508560000010440227386472992392_)"
          ></path>
        </mask>
        <path
          d="M227.8 201.3c14-19 21.5-42 21.6-65.6l-111.7-.5 90.1 66.1z"
          className={styles.st19 + ' st19'}
        ></path>
        <g transform="rotate(-90 100 100)">
          <circle cx="64.8" cy="137.7" r="126.8" className={styles.st20a + ' st20'}></circle>
          <circle cx="64.8" cy="137.7" r="126.8" className={styles.st20b + ' st20'}></circle>
        </g>
        <g>
          <g transform="rotate(-90 100 100)">
            <circle cx="64.8" cy="137.7" r="30" className={styles.st21 + ' st21'}></circle>
          </g>
          <text className="st22 st23" transform="translate(115.997 141.002)">
            65%
          </text>
        </g>
      </svg>
    </div>
  )
}

export default React.memo(Icon);