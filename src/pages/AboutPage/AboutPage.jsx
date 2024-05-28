import React from 'react'
import css from './AboutPage.module.css'

const AboutPage = () => {
  return (
      <div className={css.aboutContainer}>
          <h1 className={css.title}>ABOUT US</h1>

          <h2>Our Contacts</h2>
          <ul className={css.contacts}>
              <li>
                <p>contact</p>
              </li>
              <li>
                <p>contact</p>
              </li>
              <li ><a href="mailto:info@jasminestudio.com">info@devstudio.com</a></li>
                <li ><a href="tel:+110001111111">+11 (000) 111-11-11</a></li>
          </ul>

          <h2>Our stats </h2>
          <ul className={css.stats}>
              <li className={css.stat}>We have 5 restaurants</li>
              <li className={css.stat}>5 years in restaurant business</li>
              <li className={css.stat}>Opened in 5 cities in Ukraine</li>
              <li className={css.stat}>300000+ happy clients a month</li>
          </ul>
    </div>
  )
}

export default AboutPage