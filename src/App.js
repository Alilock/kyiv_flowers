import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProductListPage from './pages/ProductListPage'
import ProductPage from './pages/ProductPage'
import BasketPage from './pages/BasketPage'
import BasketProvider from './context/BasketContext'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationAZ from './locales/az.json';


const resources = {
  en: {
    translation: translationEN
  },
  az: {
    translation: translationAZ
  }
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'az',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
const App = () => {
  return (
    <BasketProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="productlist/:id" element={<ProductListPage />} />
          <Route path='product/:id' element={<ProductPage />} />
          <Route path="basket" element={<BasketPage />} />
        </Routes>
      </Router>
    </BasketProvider>

  )
}

export default App
