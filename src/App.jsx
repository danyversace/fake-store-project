 import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import ContactUs from './pages/ContactUs/ContactUs';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import CartContextProvider from './contexts/CartContext';


function App() {

  return (

    <div className='app-container'>
    <BrowserRouter>
      <CartContextProvider>
          <Header />

          <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/details/:productId' element={<ProductDetailPage />}/>
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/contactus' element={<ContactUs />} />
          </Routes>

          <Footer />
        </CartContextProvider> 
      </BrowserRouter>
    </div>
  )
}

export default App
