import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ListProducts } from '../components/ListProducts'
import { Slider } from '../components/Slider'
import { Error } from '../components/Error'
import { Favorites } from '../components/Favorites'
import { Trolley } from '../components/Trolley'
import { BoughtProducts } from '../components/BoughtProducts'
import Login from '../components/Login/Login';
import Contactanos from '../components/Contactanos/Contactanos'
export const AppRoutes = () => {
  return (
    <HashRouter hashType="slash">
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
      <Header />

      <Routes>
        <Route path='/Login' element={<> <Slider /> <ListProducts /> </>} />
        <Route path='/home' element={<> <Slider /> <ListProducts /> </>} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/trolley' element={<Trolley />} />
        <Route path='/trolley/boughtProducts' element={<BoughtProducts />} />
        <Route path='/Contacto' element={<Contactanos />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}
