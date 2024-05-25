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


function App() {

  const modalOpen = useSelector(selectModalOpen);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
            {/* <Switch > */}
            <Route path="/category/:categoryName" element={<MainPage />} />
            <Route path="/" element={<MainPage />}/>
            <Route path='/dishpage/:id' element={<DishPage />} />
            
              {/* <Route path="*" element={<NotFound/>}/> */}
            {/* </Switch> */}
        </Routes>
      </Suspense>
      {modalOpen && <Modal />}
      {/* <Footer /> */}
    </>
  )
}

export default App
