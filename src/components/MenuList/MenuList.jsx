import { useSelector } from 'react-redux'
// import { fetchMenu } from '../../redux/MainMenuSlice/MainMenuOps'
import { selectFilteredDishes } from '../../redux/MainMenuSlice/SearchMenuSlice'
import DishItem from '../DishItem/DishItem'
import css from './MenuList.module.css'
import { useDispatch } from 'react-redux'
import { fetchCakes, fetchMenu } from '../../redux/MainMenuSlice/MainMenuOps'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const MenuList = () => {

  const filteredDishes = useSelector(selectFilteredDishes)
  
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName === 'cakes') {
      dispatch(fetchCakes());
    } else {
      dispatch(fetchMenu());
    }
  }, [dispatch, categoryName]);

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