import React from 'react'
import MenuList from '../../components/MenuList/MenuList'
// import { fetchMenu } from '../../redux/MainMenuSlice/MainMenuOps'
import SearchBox from '../../components/SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux';
import { getIsError, getIsLoading } from '../../redux/MainMenuSlice/MainMenuSlice';
import { useEffect } from 'react';
import { fetchMenu } from '../../redux/MainMenuSlice/MainMenuOps';
// import Filters from '../../components/Filters/Filters';
// import Header from '../../components/Header/Header'
// import Footer from '../../components/Footer/Footer';

const MainPage = () => {

  // const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getIsError);

  // useEffect(() => {
  //   dispatch(fetchMenu());
  // }, [dispatch]);
    

  return (
    <div>
        {/* <Header /> */}
          <h1>MENU</h1>
          <SearchBox />
          {isLoading && !error &&<h2>Loading...</h2>}
          {/* <Filters /> */}
          <MenuList />
          {/* <Footer /> */}
    </div>
  )
}

export default MainPage