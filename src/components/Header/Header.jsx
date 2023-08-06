// rcfce
import React, {useContext} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CartContext } from '../../contexts/CartContext'




function Header() {
  // i need access to the card in order to use the link on the
  // shopping cart
  const {cart} = useContext(CartContext)

  return (
    <div className='header-container'>
       <Link to="/" className='homepage-link'><h3>Fake Store</h3></Link>
        <div className='cart-image-container'>
          <Link to='/checkout'><AiOutlineShoppingCart className='cart-image'/></Link> 
          <p>{cart.length}</p>
        </div>
    </div>
  )
}

export default Header