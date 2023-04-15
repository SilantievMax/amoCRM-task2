import React from 'react'

import styles from './Services.module.scss'

const Services = () => {
  return (
    <div className={styles.block}>
      <h3 className={styles.heading}>
        Вместе с 
        <span>
          бесплатной <br /> консультацией
        </span>{' '}
        мы дарим:
      </h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h6>Виджеты</h6>
          <p>30 готовых решений</p>
        </li>
        <li className={styles.item}>
          <h6>Dashboard</h6>
          <p>с показателями вашего бизнеса</p>
        </li>
        <li className={styles.item}>
          <h6>Skype Аудит</h6>
          <p>отдела продаж и CRM системы</p>
        </li>
        <li className={styles.item}>
          <h6>35 дней</h6>
          <p>использования CRM</p>
        </li>
      </ul>
    </div>
  )
}

export default Services
