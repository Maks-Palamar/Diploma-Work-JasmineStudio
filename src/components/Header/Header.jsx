import React from 'react'
import css from './Header.module.css'
import { useRef } from 'react'
import Cart from '../Cart/Cart'
import { selectCart, selectTotalPrice } from '../../redux/CartSlice/CartSlice'
import { useSelector } from 'react-redux'

const Header = () => {

    const cartDishes = useSelector(selectCart)
    const totalPrice = useSelector(selectTotalPrice)

  const headerRef = useRef(null);
  const headerIconRef = useRef(null);

  const toggleMenu = () => {
    if (headerRef.current && headerIconRef.current) {
      headerRef.current.classList.toggle(css.headerOpen);
      headerIconRef.current.classList.toggle(css.headerMenuIconOpen);
    }
  }

  return (
    <header ref={headerRef} className={css.header}>
        <div className={`${css.container} ${css.headerContainer}`}>
            <nav className={css.headerNavigation}>
                <button type="button" className={css.headerMenuBtn} onClick={toggleMenu}>
                    <svg ref={headerIconRef} className={css.headerMenuIcon} width="20" height="20">
                        <use xlinkHref='/symbol-defs.svg#icon-navigation-arrow-svgrepo-com' width="20" height="20"></use>
                    </svg>
                </button>
                  {cartDishes.length!==0 ? <p className={css.logo} >Total Price: {totalPrice} <span>$</span></p> : <a className={css.logo} href="./index.html">Jasmine<span>Studio</span></a>}
            </nav>

            <div className={css.headerOrdered}>
                <h2>Your order:</h2>
                  {cartDishes.length !== 0 ? <Cart /> : <p>Oooopsie! Seems your cart is empty</p>}
                <button type="submit" className={css.orderBtn}>Order</button>
            </div>
        </div>
    </header>
  )
}

export default Header