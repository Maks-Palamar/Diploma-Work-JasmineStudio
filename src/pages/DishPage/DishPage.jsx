import React, { useEffect, useRef, useState } from 'react'
import { fetchOneDish } from '../../redux/MainMenuSlice/MainMenuOps'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { selectDishDetails } from '../../redux/MainMenuSlice/MainMenuSlice'
import css from './Dishpage.module.css'


const DishPage = () => {

    const dishId = useParams();
    console.log(dishId.id);
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? "/");

    const dishDetails = useSelector(selectDishDetails);

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

    // Функція для ручного перемикання
    const toggleContent = () => {
        setShowDescription(prevShowDescription => !prevShowDescription);
    };

//     const 
//     const toggleMenu = () => {
//     if (headerRef.current && headerIconRef.current) {
//       headerRef.current.classList.toggle(css.headerOpen);
//       headerIconRef.current.classList.toggle(css.headerMenuIconOpen);
//     }
//   }

  return (
      <div >
          {/* <div className={css.dishHero}>
              <h1 className={css.dishName} style={{ backgroundImage: `linear-gradient(rgba(238, 237, 221, 0.7), rgba(238, 237, 221, 0.7)), url("${dishDetails.image}")` }}>{dishDetails.name}</h1>
              <p className={css.dishDescript}>{dishDetails.description}</p>
          </div> */}
          <div className={`${css.dishHero} ${showDescription && css.heroImgRight}`} style={{ backgroundImage: `linear-gradient(rgba(238, 237, 221, 0.7), rgba(238, 237, 221, 0.7)), url("${dishDetails.image}")` }}>
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
            {/* <button onClick={toggleContent} className={css.toggleButton}>Toggle</button> */}
    </div>
  )
}

export default DishPage