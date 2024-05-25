import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Filters.module.css';

const Filters = () => {

  const link = ({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})

  return (
    <div>
      <ul>
        <li><NavLink to="/" className={link}>All</NavLink></li>
        <li><NavLink to="/category/cakes" className={link}>Cakes</NavLink></li>
        {/* <NavLink to="/category/category2">Category 2</NavLink> */}
      </ul>
    </div>
  );
};

export default Filters;