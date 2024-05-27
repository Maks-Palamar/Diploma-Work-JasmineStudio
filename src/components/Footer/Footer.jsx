import React from 'react'
import css from './Footer.module.css'

const Footer = () => {
  return (
      <footer className={css.footer}>
          <div>
              <h2 className={css.footerTitle}>Jasmine<span>Studio</span></h2>
              <p className={css.footerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel arcu sem. Sed non sodales dui. Interdum et malesuada</p>
          </div>
          <div className={css.footerSocSection}>
                <p className={css.footerSocTitle}>Social media</p>
                <ul className={css.footerSocList}>
                    <li className={css.footerSoc}>
                        <a href="https://www.instagram.com" className={css.footerSocLink} target="_blank" rel="noreferrer">
                            <svg width="24" height="24" className={css.footerSocIcon}>
                                <use href="/symbol-defs.svg#icon-instagram-2"></use>
                            </svg>
                        </a>
                    </li>
                    <li className={css.footerSoc}>
                        <a href="https://x.com" className={css.footerSocLink} target="_blank" rel="noreferrer">
                            <svg width="24" height="24" className={css.footerSocIcon}>
                                <use href="/symbol-defs.svg#icon-twitter-1-1"></use>
                            </svg>
                        </a>
                    </li>
                    <li className={css.footerSoc}>
                        <a href="https://facebook.com" className={css.footerSocLink} target="_blank" rel="noreferrer">
                            <svg width="24" height="24" className={css.footerSocIcon}>
                                <use href="/symbol-defs.svg#icon-facebook-1"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
  )
}

export default Footer