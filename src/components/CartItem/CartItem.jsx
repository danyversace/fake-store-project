import React, {useContext} from 'react'
import './CartItem.css'
import { BsTrash3 } from "react-icons/bs";
import { CartContext } from '../../contexts/CartContext';

function CartItem({product}) {

  const {removeProduct} = useContext(CartContext)

  return (
    <div className='mainmain-container'>
    <div className='cart-container'>
        <div className='cart-items'>
            <div className="item"><img src={product.image} alt="" /></div>
            <div className="item"><p>{product.title}</p></div>
            <div className="item"><p>{product.price} &#8364;</p></div>
            <div className="item">1</div>
            <div className="item"><BsTrash3 onClick={()=>removeProduct(product.id)}
            className='trash-icon'/></div>
        </div>
    </div>
    </div>
  )
}

export default CartItem