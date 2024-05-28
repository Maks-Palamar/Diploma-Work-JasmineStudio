import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainPage from './pages/MainPage/MainPage'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
// import { Switch } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader/Loader'
// import Footer from './components/Footer/Footer'
import DishPage from './pages/DishPage/DishPage'
import Modal from './components/Modal/Modal'
import { selectModalOpen } from './redux/MainMenuSlice/MainMenuSlice'
import { useSelector } from 'react-redux'
import HelloPage from './pages/HelloPage/HelloPage'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'

function App() {

  const modalOpen = useSelector(selectModalOpen);

  return (
    <>
      <Header />
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
            {/* <Switch > */}
            <Route path="/menu/category/:categoryName" element={<MainPage />} />
            <Route path="/menu" element={<MainPage />}/>
            <Route path='/' element={<HelloPage />} />
            <Route path='/menu/category/:categoryName/dishpage/:id' element={<DishPage />} />
            
              {/* <Route path="*" element={<NotFound/>}/> */}
            {/* </Switch> */}
        </Routes>
      </Suspense>
      {modalOpen && <Modal />}
      <Footer />
    </>
  )
}

export default App
