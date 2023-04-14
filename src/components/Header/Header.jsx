import { logo, phone, tg, whatsapp } from 'assets/icons'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_top}>
        <div className={styles.block_logo}>
          <img src={logo} alt='logo' />
          <smal>
            крупный интегратор CRM <br /> в Росcии и ещё 8 странах
          </smal>
        </div>
        <nav className={styles.nav}>
          <a href='#'>Услуги</a>
          <a href='#'>Виджеты</a>
          <a href='#'>Интеграции</a>
          <a href='#'>Кейсы</a>
          <a href='#'>Сертификаты</a>
        </nav>
      </div>
      <div className={styles.contact}>
        <a href='tel:+75555555555'>+7 555 555-55-55</a>
        <img src={tg} alt='telegram' />
        <img src={phone} alt='phone' />
        <img src={whatsapp} alt='whatsapp' />
      </div>
    </header>
  )
}

export default Header
