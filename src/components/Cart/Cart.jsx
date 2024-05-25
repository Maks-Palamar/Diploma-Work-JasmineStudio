import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/CartSlice/CartSlice'
import { useDispatch } from 'react-redux'
import { removeFromCart , addToCart } from '../../redux/CartSlice/CartSlice'
import css from './Cart.module.css'
import { getIsLoading } from '../../redux/MainMenuSlice/MainMenuSlice'
import { modalOpen } from '../../redux/ModalSlice/ModalSlice'
import Loader from '../Loader/Loader'

const Cart = () => {

    const dispatch = useDispatch()
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
        dispatch(modalOpen())
    }

  return (
      <div>
          {isLoading ? <Loader /> :
              <ul className={css.cart}>
                  {cartDishes && cartDishes.map(dish =>
                      <li key={dish.id} className={css.cartItem}>
                          <div className={css.dishNameWrap}>
                              <p className={css.cartDishName}>{dish.name}</p>
                              <div className={css.cartButtonsWrap}>
                                  <button type='button' onClick={() => handleRemove(dish)} className={css.cartRemoveBtn}>Remove</button>
                                  <button type='button' onClick={() => handleAdd(dish)} className={css.cartRemoveBtn}>Add</button>
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