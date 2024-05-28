import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Filters.module.css';

const Filters = () => {

  const link = ({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})

  return (
    // <div>
      <ul className={css.navList}>
        <li className={css.linkItem}><NavLink to="/menu/category/all" className={link}>All</NavLink></li>
        <li className={css.linkItem}><NavLink to="/menu/category/cakes" className={link}>Cakes</NavLink></li>
        <li className={css.linkItem}><NavLink to="/menu/category/pastries" className={link}>Pastries</NavLink></li>
        <li className={css.linkItem}><NavLink to="/menu/category/cold-dishes" className={link}>Coldies</NavLink></li>
        <li className={css.linkItem}><NavLink to="/menu/category/tarts" className={link}>Tarts</NavLink></li>
        <li className={css.linkItem}><NavLink to="/menu/category/drinks" className={link}>Drinks</NavLink></li>
        {/* <NavLink to="/category/category2">Category 2</NavLink> */}
      </ul>
    // </div>
  );
};

export default Filters;