import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/CartSlice/CartSlice'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/CartSlice/CartSlice'

const Cart = () => {

    const dispatch = useDispatch()
    const cartDishes = useSelector(selectCart)
    
    const handleRemove = (dish) => {
        dispatch( removeFromCart({id: dish.id, price: dish.price} ) )
    }

  return (
      <div>
          <ul>
              {cartDishes && cartDishes.map(dish => 
                  <li key={dish.id} >
                      <p>{dish.name}</p>
                      <p>{dish.price}</p>
                      <button type='button' onClick={() => handleRemove(dish)}>Remove</button>
                </li>
              )}
          </ul>
    </div>
  )
}

export default Cart