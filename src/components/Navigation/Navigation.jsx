import React from 'react'
import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

const Navigation = () => {

const link = ({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})

  return (
      <div className={css.nav}>
          <NavLink to="/" className={link}>Home</NavLink>
          <NavLink to="/menu" className={link}>Menu</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
          {/* <NavLink to="/contacts" className={css.navLink}>Contacts</NavLink> */}
    </div>
  )
}

export default Navigation