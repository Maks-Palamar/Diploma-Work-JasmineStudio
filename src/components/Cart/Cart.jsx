import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/CartSlice/CartSlice'
import { useDispatch } from 'react-redux'
import { removeFromCart , addToCart, selectTable, setTable } from '../../redux/CartSlice/CartSlice'
import css from './Cart.module.css'
import { getIsLoading } from '../../redux/MainMenuSlice/MainMenuSlice'
import { modalOpen } from '../../redux/ModalSlice/ModalSlice'
import Loader from '../Loader/Loader'
import { useEffect } from 'react'

const Cart = () => {

    const dispatch = useDispatch();
    const table = useSelector(selectTable)
    const cartDishes = useSelector(selectCart)
    const isLoading = useSelector(getIsLoading);

    const handleAdd = (dish) => {
        console.log('dish', dish);
        dispatch( addToCart(dish) )
    }
    
    const handleRemove = (dish) => {
        dispatch( removeFromCart({id: dish.id, price: dish.price} ) )
    }

    const handleOrder = () => {
        if (table === '0') {
            alert("Please select a table.");
            return;
        }
        dispatch(modalOpen())
    }

    // const toggleOrderBtn = () => {
    //     if
    // }
    

    
    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const table = urlParams.get('table');
    //     if (table) {
    //         dispatch(setTable(table));
    //     }
    // }, [dispatch]);

    // const updateURLWithTableNumber = (newTable) => {
    //     const currentURL = window.location.href.split('?')[0]; // Get the base URL without parameters
    //     const newURL = `${currentURL}?table=${newTable}`;
    //     window.history.pushState({ path: newURL }, '', newURL);
    // };

    // const onTableNumberChange = (e) => {
    //     const table = e.target.value;
    //     dispatch(setTable(table));
    //     updateURLWithTableNumber(table);
    // }; 

  return (
      <div>
            {/* <div className={css.tableSelection}>
                <label htmlFor="tableNumber">Table Number:</label>
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
            </div> */}
          {isLoading ? <Loader /> :
              <ul className={css.cart}>
                  {cartDishes && cartDishes.map(dish =>
                      <li key={dish.id} className={css.cartItem}>
                          <div className={css.dishNameWrap}>
                              <p className={css.cartDishName}>{dish.name}</p>
                              {/* <div className={css.cartButtonsWrap}>
                                  <button type='button' onClick={() => handleRemove(dish)} className={css.cartRemoveBtn}>Remove</button>
                                  <button type='button' onClick={() => handleAdd(dish)} className={css.cartRemoveBtn}>Add</button>
                              </div> */}
                              <div className={css.cartAddRemove}>
                                    <button type='button' onClick={() => handleRemove(dish)} className={css.cartRemoveBtn}>{'<'}</button>
                                    {dish.quantity > 0 ? <p className={css.dishQuantity}>{dish.quantity}</p> : <p>0</p>}
                                    <button type='button' onClick={() => handleAdd(dish)} className={css.cartRemoveBtn}>{'>'}</button>
                            </div>
                          </div>
                          <div className={css.dishPriceWrap}>
                              <p className={css.cartDishPrice}>{dish.price}$</p>
                              <p className={css.dishQuantity}>x{dish.quantity}</p>
                          </div>
                      </li>
                  )}
              </ul>}
          <button type="button" className={css.orderBtn} onClick={handleOrder}>Order</button>
    </div>
  )
}

export default Cart