import { useSelector } from 'react-redux'
// import { fetchMenu } from '../../redux/MainMenuSlice/MainMenuOps'
import { selectFilteredDishes } from '../../redux/MainMenuSlice/SearchMenuSlice'
import DishItem from '../DishItem/DishItem'
import css from './MenuList.module.css'
import { useDispatch } from 'react-redux'
import { fetchCakes, fetchColdDishes, fetchMenu, fetchPastries, fetchTarts, fetchDrinks } from '../../redux/MainMenuSlice/MainMenuOps'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Filters from '../Filters/Filters'
import { getIsLoading} from '../../redux/MainMenuSlice/MainMenuSlice'
import Loader from '../Loader/Loader'

const MenuList = () => {

  const filteredDishes = useSelector(selectFilteredDishes)
  
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getIsError);

  useEffect(() => {
    if (categoryName === 'cakes') {
      dispatch(fetchCakes());
    } else if (categoryName === 'pastries') {
      dispatch(fetchPastries());
    } else if (categoryName === 'cold-dishes') {
      dispatch(fetchColdDishes());
    } else if (categoryName === 'tarts') {
      dispatch(fetchTarts());
    } else if (categoryName === 'drinks') {
      dispatch(fetchDrinks());
    }
    else {
      dispatch(fetchMenu());
    }
  }, [dispatch, categoryName]);

  return (
    <div className={css.menuSection}>
      <Filters />
      {isLoading ? <Loader /> :
        <ul className={css.menu}>
          {filteredDishes && filteredDishes.map(dish =>
            <li key={dish.id} ><DishItem data={dish} /></li>
          )}
        </ul>}
    </div>
  )
}

export default MenuList