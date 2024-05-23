import { useState } from 'react'
import './App.css'
import { Footer } from "./components/Footer/Footer"
import { Header } from './components/Header/Header'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ProductList } from './components/Products/ProductList/ProductList'
import { ProductDetailModal } from './components/Products/ProductDetailModal/ProductDetailModal'
import { ProductDetail } from './components/Products/ProductDetail/ProductDetail'

/*<Router>
<Header />
<div className="main-content">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</div>
<Footer />
</Router> */

function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
    <Route path="/" element={<ProductList />} />
  </Routes>
      <Footer/>
    </BrowserRouter>


    
    
  )
}

export default App
