import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/CartSlice/CartSlice'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/CartSlice/CartSlice'
import css from './Cart.module.css'

const Cart = () => {

    const dispatch = useDispatch()
    const cartDishes = useSelector(selectCart)
    
    const handleRemove = (dish) => {
        dispatch( removeFromCart({id: dish.id, price: dish.price} ) )
    }

  return (
      <div>
          <ul className={css.cart}>
              {cartDishes && cartDishes.map(dish => 
                  <li key={dish.id} className={css.cartItem}>
                      <div className={css.dishNameWrap}>
                          <p className={css.cartDishName}>{dish.name}</p>
                          <button type='button' onClick={() => handleRemove(dish)} className={css.cartRemoveBtn}>Remove</button>
                      </div>
                      <div className={css.dishPriceWrap}>
                          <p className={css.cartDishPrice}>{dish.price}</p>
                          <p>temp</p>
                      </div>
                </li>
              )}
          </ul>
    </div>
  )
}

export default Cart