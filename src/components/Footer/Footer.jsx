import { phone, tg, whatsapp } from 'assets/icons'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h6 className={styles.heading}>О компании</h6>
          <a href='#'>Партнёрская программа</a>
          <a href='#'>Вакансии</a>
        </li>
        <li className={styles.item}>
          <h6 className={styles.heading}>Меню</h6>
          <a href='#'>Расчёт стоимости</a>
          <a href='#'>Услуги</a>
          <a href='#'>Услуги</a>
          <a href='#'>Интеграции</a>
          <a href='#'>Наши клиенты</a>
        </li>
        <li className={styles.item}>
          <h6 className={styles.heading}>&ensp;</h6>
          <a href='#'>Кейсы</a>
          <a href='#'>Благодарственные письма</a>
          <a href='#'>Сертификаты</a>
          <a href='#'>Блог на Youtube</a>
          <a href='#'>Вопрос / Ответ</a>
        </li>
        <li className={styles.item}>
          <h6 className={styles.heading}>Контакты</h6>
          <a href='tel:+75555555555'>+7 555 555-55-55</a>
          <div className={styles.icon}>
            <img src={tg} alt='telegram' />
            <img src={phone} alt='phone' />
            <img src={whatsapp} alt='whatsapp' />
          </div>
          <a href='#'>Москва, Путевой проезд 3с1, к 902</a>
        </li>
      </ul>
      <div className={styles.copy_block}>
        <smal>&copy;WELBEX 2022. Все права защищены.</smal>
        <a href='#'>Политика конфиденциальности</a>
      </div>
    </footer>
  )
}

export default Footer
