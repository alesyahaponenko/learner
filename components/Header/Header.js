import styles from './Header.module.scss'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import ExitButton from '../Buttons/ExitButton/ExitButton'
import InfoButton from '../Buttons/InfoButton/InfoButton'
import { useGetAvatarInfoQuery } from '../../store/feutures/avatarApi'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import UserButton from '../Buttons/UserButton/UserButton'
import Reminder from "../Buttons/Reminder/Reminder";

const Header = () => {
  const { data, error, isLoading } = useGetAvatarInfoQuery('')

  useEffect(() => {}, [])

  return (
    <>
      <div className={styles.header_wrap + ' header'}>
        <div className={styles.logo_sections}>
          <Logo />
          <div className={styles.search}>
            <Search />
          </div>
        </div>
        <div className={styles.title}>
          The People vs Hall (Mens Rea)
          <div className={styles.infoButton}>
            <InfoButton data={data} isLoading={isLoading} error={error} />
          </div>
        </div>
        <div className={styles.btn_sections}>
          <div className={styles.btn}>
            <Reminder />
          </div>
          <div className={styles.btn}>
            <UserButton />
          </div>
          <div className={styles.btn}>
            <ExitButton />
          </div>

        </div>
      </div>
    </>
  )
}

export default Header