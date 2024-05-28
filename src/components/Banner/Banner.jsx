import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDishes } from '../../redux/MainMenuSlice/MainMenuSlice';
import { fetchMenu } from '../../redux/MainMenuSlice/MainMenuOps';
import css from './Banner.module.css';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    const dispatch = useDispatch();
    const allDishes = useSelector(selectDishes);

    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

    const getTopOrderedImagesByType = (dishes) => {
        const groupedByType = {};

        dishes.forEach(dish => {
            const type = dish.type;
            if (!groupedByType[type]) {
                groupedByType[type] = [];
            }
            groupedByType[type].push(dish);
        });

        const topOrderedDishes = {};

        Object.keys(groupedByType).forEach(type => {
            const sortedDishes = groupedByType[type].sort((a, b) => b.ordered - a.ordered);
            topOrderedDishes[type] = sortedDishes[0];
        });

        console.log(topOrderedDishes);
        return topOrderedDishes;
    };

    const topOrderedDishes = allDishes && allDishes.length ? getTopOrderedImagesByType(allDishes) : {};

    console.log(topOrderedDishes);

    const topCake = topOrderedDishes['cakes'] || null;
    const topPastry = topOrderedDishes['pastries'] || null;
    const topColdDish = topOrderedDishes['cold-dishes'] || null;
    const topTart = topOrderedDishes['tarts'] || null;
    const topDrink = topOrderedDishes['drinks'] || null;

    const cakeImage = topCake ? topCake.image : 'path/to/placeholder.jpg';
    const pastryImage = topPastry ? topPastry.image : 'path/to/placeholder.jpg';
    const coldDishImage = topColdDish ? topColdDish.image : 'path/to/placeholder.jpg';
    const tartImage = topTart ? topTart.image : 'path/to/placeholder.jpg';
    const drinkImage = topDrink ? topDrink.image : 'path/to/placeholder.jpg';

    const images = [cakeImage, pastryImage, coldDishImage, tartImage, drinkImage];
    const topDishes = [topCake, topPastry, topColdDish, topTart, topDrink];

    console.log(topDishes);

    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        if (topDishes.length > 0) {
            resetTimeout();
            timeoutRef.current = setTimeout(
                () => setCurrentIndex((prevIndex) => (prevIndex === topDishes.length - 1 ? 0 : prevIndex + 1)),
                6000
            );

            return () => {
                resetTimeout();
            };
        }
    }, [currentIndex, topDishes.length]);

    const handlePrev = () => {
        resetTimeout();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? topDishes.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        resetTimeout();
        setCurrentIndex((prevIndex) => (prevIndex === topDishes.length - 1 ? 0 : prevIndex + 1));
    };

    if (!allDishes || allDishes.length === 0) {
        return <div>Loading...</div>;
    }

    const filteredTopDishes = topDishes.filter(dish => dish !== null);


    return (
        <div className={css.banner}>
            <p className={css.bannerTitle}>Check out our top sweets</p>
            <div
                className={css.bannerImages}
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
                {filteredTopDishes.map((topDish, index) => (
                    topDish && (
                        <div className={css.bannerImage} key={index} style={{ backgroundImage:  `linear-gradient(rgba(238, 237, 221, 0.7), rgba(238, 237, 221, 0.7)), url(${topDish.image})` }}>
                            <NavLink to={`/menu/category/${topDish.type}/dishpage/${topDish.id}`} className={css.bannerLink} key={index}>
                                <h2>{topDish.name}</h2>
                            </NavLink>
                        </div>
                    )
                    //     : (
                    //     <div className={css.bannerImage} key={index} style={{ backgroundImage: `url(${images[index]})` }}>
                    //         <h2>Unavailable</h2>
                    //     </div>
                    // )
                ))}
            </div>
            <button className={`${css.bannerButton} ${css.bannerButtonPrev}`} onClick={handlePrev}>
                ‹
            </button>
            <button className={`${css.bannerButton} ${css.bannerButtonNext}`} onClick={handleNext}>
                ›
            </button>
        </div>
    );
};

export default Banner;
