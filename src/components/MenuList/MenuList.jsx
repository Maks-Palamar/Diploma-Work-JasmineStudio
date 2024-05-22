import React from 'react'
import { useSelector } from 'react-redux'
// import { fetchMenu } from '../../redux/MainMenuSlice/MainMenuOps'
import { selectFilteredDishes } from '../../redux/MainMenuSlice/SearchMenuSlice'
import DishItem from '../DishItem/DishItem'
import css from './MenuList.module.css'

const MenuList = () => {

const filteredDishes = useSelector(selectFilteredDishes)

  return (
      <div className={css.menuSection}>
          <ul className={css.menu}>
              {filteredDishes && filteredDishes.map(dish => 
                <li key={dish.id} ><DishItem data={dish}/></li>
              )}
          </ul>
    </div>
  )
}

export default MenuList