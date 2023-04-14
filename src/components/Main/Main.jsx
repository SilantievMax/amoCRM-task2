import Button from 'components/Button/Button'
import Heading from 'components/Heading/Heading'
import Services from 'components/Services/Services'
import React from 'react'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <main>
      <section className={styles.main}>
        <Heading />
        <Services />
      </section>
      <section className={styles.btn_block}>
        <Button text='Получить консультацию' />
      </section>
    </main>
  )
}

export default Main
