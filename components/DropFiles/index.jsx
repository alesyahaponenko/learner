import { useRef, useState } from 'react'
import styles from './dropFiles.module.scss'

export default function DropFiles() {
  const [file, setFile] = useState(null)

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files
    file && setFile(Array.from(file || []))
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  console.log(file)

  return (
    <div className={styles.df} onDrop={handleDrop} onDragOver={handleDragOver}>
      {!file ? (
        <h1>Drop files here</h1>
      ) : (
        file.length > 0 &&
        file.map((file, i) => (
          <p key={i}>{`Name: ${file?.name}, Type: ${file?.type}, Size: ${new Intl.NumberFormat(
            'en-US',
            {
              notation: 'compact',
            }
          ).format(file?.size)}B`}</p>
        ))
      )}
    </div>
  )
}
