import React from 'react'
import css from './NotFoundPage.module.css'
import { NavLink } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className={css.lostCaption}>Seems like you`ve lost, go back to <NavLink to="/" className={css.navLinkHome}>Home</NavLink></div>
  )
}

export default NotFoundPage