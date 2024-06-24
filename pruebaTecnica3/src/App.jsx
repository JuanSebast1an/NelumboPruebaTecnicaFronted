import { useState } from 'react'
import './App.css'
import { Footer } from "./components/Footer/Footer"
import { Header } from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ProductList } from './components/Products/ProductList/ProductList'
import { ProductDetailModal } from './components/Products/ProductDetailModal/ProductDetailModal'
import { ProductDetail } from './components/Products/ProductDetail/ProductDetail'
import { ProductCard } from './components/Products/ProductCard/ProductCard';


function App() {
  return (
    
  <Router>
    <Header/>
  <Routes>
    <Route path="/productos/:productCategory" element={<ProductList />} />
    <Route path="/productos/:productCategory/:productId" element={<ProductDetail />} />
    <Route path="*" element={<Navigate to="/productos/celulares" />} />
  </Routes>
    <Footer/>
  </Router>
    
  )
}

export default App
