import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NosotrosScreen } from '../components/Screens/NosotrosScreen';
import { PrincipalScreen } from '../components/Screens/PrincipalScreen';
import { ProductScreen } from '../components/Screens/ProductScreen';
import { Footer } from '../ui/footer';
import { Header } from '../ui/Header';



export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path='/' element={<PrincipalScreen />}/>

            <Route path='/nosotros' element={<NosotrosScreen />}/>

            <Route path='product/:productId' element={<ProductScreen/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}
