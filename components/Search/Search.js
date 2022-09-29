import styles from './Search.module.scss'

const Search = () => {
  return (
    <>
      <form className={styles.wrap}>
        <input type="text" placeholder="search" />
      </form>
    </>
  )
}

export default Search