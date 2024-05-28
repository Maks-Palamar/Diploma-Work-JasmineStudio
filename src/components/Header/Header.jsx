import React, { useEffect } from 'react'
import css from './Header.module.css'
import { useRef } from 'react'
import Cart from '../Cart/Cart'
import { selectCart, selectTotalPrice, selectTable, setTable } from '../../redux/CartSlice/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {

    const cartDishes = useSelector(selectCart)
    const totalPrice = useSelector(selectTotalPrice)
    
    const dispatch = useDispatch()
    const table = useSelector(selectTable)

  const headerRef = useRef(null);
  const headerIconRef = useRef(null);

  const toggleMenu = () => {
    if (headerRef.current && headerIconRef.current) {
      headerRef.current.classList.toggle(css.headerOpen);
      headerIconRef.current.classList.toggle(css.headerMenuIconOpen);
    }
  }

      useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const gotTable = urlParams.get('table');
        if (gotTable) {
            dispatch(setTable(gotTable));
        }

        const currentUrl = window.location.href.split('?')[0];
        const newUrl = `${currentUrl}?table=${table}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }, [dispatch, table]);

    const updateURLWithTableNumber = (newTable) => {
        const currentURL = window.location.href.split('?')[0];
        const newURL = `${currentURL}?table=${newTable}`;
        window.history.pushState({ path: newURL }, '', newURL);
    };

    const onTableNumberChange = (e) => {
        const table = e.target.value;
        dispatch(setTable(table));
        updateURLWithTableNumber(table);
    }; 

  return (
    <header ref={headerRef} className={css.header}>
        <div className={`${css.container} ${css.headerContainer}`}>
            <nav className={css.headerNavigation}>
                <button type="button" className={css.headerMenuBtn} onClick={toggleMenu}>
                    <svg ref={headerIconRef} className={css.headerMenuIcon} width="20" height="20">
                        <use xlinkHref='/symbol-defs.svg#icon-navigation-arrow-svgrepo-com' width="20" height="20"></use>
                    </svg>
                </button>
                  {cartDishes.length!==0 ? <p className={css.logo} >Total Price: {(totalPrice).toFixed(2)} <span>$</span></p> : <a className={css.logo} href="./index.html">Jasmine<span>Studio</span></a>}
            </nav>

        <div className={css.headerOrdered}>
            <div className={css.tableSelection}>
                <label htmlFor="tables" className={css.tablesLabel}>Table Number:</label>
                <select name="tables" id="table" className={css.tables} onChange={onTableNumberChange} value={table} required>
                    <option value="0" defaultValue={true}>Select a table</option>
                    <option value="1">Table 1</option>
                    <option value="2">Table 2</option>
                    <option value="3">Table 3</option>
                    <option value="4">Table 4</option>
                    <option value="5">Table 5</option>
                    <option value="6">Table 6</option>
                    <option value="7">Table 7</option>
                    <option value="8">Table 8</option>
                    <option value="9">Table 9</option>
                </select>
            </div>
                <h2>Your order:</h2>
                  {cartDishes.length !== 0 ? <Cart /> : <p>Oooopsie! Seems your cart is empty</p>}
                {/* <button type="submit" className={css.orderBtn}>Order</button> */}
            </div>
        </div>
    </header>
  )
}

export default Header