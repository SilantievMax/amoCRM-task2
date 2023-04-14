import React from 'react'

import styles from './Heading.module.scss'

const Heading = () => {
  return (
    <div>
      <h1 className={styles.heading}>
        Зарабатывайте <br />
        больше
      </h1>
      <h2 className={styles.small}>с WELBEX</h2>
      <p className={styles.description}>
        Развиваем и контролируем <br /> продажи за вас
      </p>
    </div>
  )
}

export default Heading
