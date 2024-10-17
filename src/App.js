import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProductListPage from './pages/ProductListPage'
import ProductPage from './pages/ProductPage'
import BasketPage from './pages/BasketPage'



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="productlist" element={<ProductListPage />} />
        <Route path='product/:id' element={<ProductPage />} />
        <Route path="basket" element={<BasketPage />} />
      </Routes>
    </Router>
  )
}

export default App
