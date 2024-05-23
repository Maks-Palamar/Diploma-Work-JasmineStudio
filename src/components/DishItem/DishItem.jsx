import React from 'react'
import css from './DishItem.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/CartSlice/CartSlice'

const DishItem = ({ data }) => {
    
    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(addToCart(data))
    }

  return (
      <div className={css.dish}  style={{ backgroundImage: `linear-gradient(rgba(238, 237, 221, 0.7), rgba(238, 237, 221, 0.7)), url("${data.image}")` }}>
          <h3 className={ css.name }>{data.name}</h3>
            {/* <p className={css.dishDescript}>{data.description}</p> */}
            <p className={css.dishPrice}>{data.price} <span>$</span></p>
          <button type="button" className={css.addButton} onClick={handleAdd}>Add to cart</button>
    </div>
  )
}

export default DishItem