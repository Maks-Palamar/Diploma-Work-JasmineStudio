import React, { useEffect, useRef, useState } from 'react'
import { fetchOneDish } from '../../redux/MainMenuSlice/MainMenuOps'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { selectDishDetails } from '../../redux/MainMenuSlice/MainMenuSlice'
import { addToCart, removeFromCart } from '../../redux/CartSlice/CartSlice'
import css from './Dishpage.module.css'
import { NavLink } from 'react-router-dom'

import { selectCart } from '../../redux/CartSlice/CartSlice'

const DishPage = () => {

    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const dishId = useParams();
    console.log(dishId.id);
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? "/");

    const dishDetails = useSelector(selectDishDetails);

    const cartDishes = useSelector(selectCart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneDish(dishId.id));
    }, [dispatch, dishId]);


    //--------------------------------
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowDescription(prevShowDescription => !prevShowDescription);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const toggleContent = () => {
        setShowDescription(prevShowDescription => !prevShowDescription);
    };
    const handleAdd = (dish) => {
        console.log('dish', dish);
        dispatch( addToCart(dish) )
    }
    
    const handleRemove = (dish) => {
        dispatch( removeFromCart({id: dish.id, price: dish.price} ) )
    }

    const ingredients = dishDetails.ingredients;
    const cartItem = cartDishes.find(item => item.id === dishDetails.id) || {};
    console.log(ingredients);
    console.log(dishDetails);


    const handleTouchStart = (e) => {
        setTouchStartX(e.changedTouches[0].screenX);
      };
    
      const handleTouchEnd = (e) => {
        setTouchEndX(e.changedTouches[0].screenX);
        checkSwipe();
      };
  
      const checkSwipe = () => {
          const swipeThreshold = 50;
          if (touchStartX - touchEndX > swipeThreshold) {
              toggleContent();
          } else if (touchEndX - touchStartX > swipeThreshold) {
              toggleContent();
          }
      };
    
  return (
      <div className={css.dishPage}>
          <div className={`${css.dishHero} ${showDescription && css.heroImgRight}`} style={{ backgroundImage: `linear-gradient(rgba(238, 237, 221, 0.7), rgba(238, 237, 221, 0.7)), url("${dishDetails.image}")` }}
          onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <NavLink to={backLinkRef.current} className={css.backLink}>⬅ Go back</NavLink>
                
                <h1 className={`${css.dishName} ${showDescription ? css.hiddenName : css.visibleName}`}>
                    {dishDetails.name}
                </h1>
                <p className={`${css.dishDescript} ${showDescription ? css.visibleDescr : css.hiddenDescr}`}>
                    {dishDetails.description}
                </p>
              <button className={css.toggleButton} onClick={toggleContent} >
                  <svg className={`${css.toggleIcon} ${showDescription && css.IconLeft}`} width="20" height="20">
                        <use xlinkHref='/symbol-defs.svg#icon-navigation-arrow-svgrepo-com' width="20" height="20"></use>
                    </svg>
              </button>
          </div>
          <div className={css.dishInfo}>
              <div className={css.dishIngredients}>
                  <div className={css.ingridientsInfo}>
                      <h3 className={css.ingridientsTitle}>Ingridients:</h3>
                      <p className={css.ingridientsWeight}>{dishDetails.weight}</p>
                  </div>
                  <ul className={css.ingridientsList}>
                      {ingredients &&ingredients.map(ingridient => <li key={ingridient}>{ingridient}</li>)}
                  </ul>
              </div>
              <div className={css.pricing}>
                  <h3 className={css.dishPrice}>Price: <br />{dishDetails.price}$</h3>
                  <div className={css.cartAddRemove}>
                        <button type='button' onClick={() => handleRemove(dishDetails)} className={css.cartRemoveBtn}>{'<'}</button>
                        {cartItem.quantity > 0 ? <p className={css.dishQuantity}>{cartItem.quantity}</p> : <p>0</p>}
                        <button type='button' onClick={() => handleAdd(dishDetails)} className={css.cartRemoveBtn}>{'>'}</button>
                  </div>
              </div>
          </div>
            {/* <button onClick={toggleContent} className={css.toggleButton}>Toggle</button> */}
    </div>
  )
}

export default DishPage