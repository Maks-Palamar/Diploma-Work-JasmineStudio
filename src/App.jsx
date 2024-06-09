import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader/Loader'
import Modal from './components/Modal/Modal'
import { selectModalOpen } from './redux/MainMenuSlice/MainMenuSlice'
import { useSelector } from 'react-redux'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'

const HelloPage = lazy(() => import('./pages/HelloPage/HelloPage'))
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'))
const DishPage = lazy(() => import('./pages/DishPage/DishPage'))
const MainPage = lazy(() => import('./pages/MainPage/MainPage'))
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
            <Route path="/menu/category/all" element={<MainPage />}/>
            <Route path='/' element={<HelloPage />} />
            <Route path='/menu/category/:categoryName/dishpage/:id' element={<DishPage />} />
            <Route path='/about' element={<AboutPage />} />
            
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
