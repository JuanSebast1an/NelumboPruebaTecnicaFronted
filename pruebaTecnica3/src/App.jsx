import { useState } from 'react'
import './App.css'
import { Footer } from "./components/Footer/Footer"
import { Header } from './components/Header/Header'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ProductList } from './components/Products/ProductList/ProductList'
import { ProductDetailModal } from './components/Products/ProductDetailModal/ProductDetailModal'
import { ProductDetail } from './components/Products/ProductDetail/ProductDetail'

function App() {
  const [count, setCount] = useState(0)
/*<Route path="/" element={<HomePage />} />
<Routes>
        <Route path="/productos/:categoria" element={<ProductList />} />
        <Route path="detalles/:id" element={<ProductDetail />} />*/
        {/* Ruta de "catch-all" para redireccionar a la página principal */}
       /* <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>*/
  return (
    
    <BrowserRouter>
      <Header/>
      <ProductList/>
      <Footer/>
    </BrowserRouter>
    
    
  )
}

export default App
