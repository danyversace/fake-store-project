//rfce
import React, { useContext } from 'react'
import './ProductCard.css'
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { CartContext } from '../../contexts/CartContext'
import {Link} from 'react-router-dom'

function ProductCard({product}) {

  // get the global state
  //NOTE {} NOT []

  const {addProduct, cart, removeProduct} = useContext(CartContext)

  // start with a varibale to test UI

  //const isInCart = false;
  //change to state in order to toggle it
  const [isInCart, setIsInCart] = React.useState(false)

  //how do we know if this particular product is in cart?

  React.useEffect (
    ()=> {
      // is product in cart?
      setIsInCart(cart?.find(item=>item.id===product.id))

    },[cart] //runs anytime in cart products changes
  )

  return (
    <div className='product-card'>
      <div className='favorite-card'>
      {
        isInCart?
        <AiTwotoneHeart onClick={()=>removeProduct(product.id)}
        className='heart-icon' />
        :
        <AiOutlineHeart onClick={()=>addProduct(product)}
        className='heart-icon' />
      }
      </div>
        <img src={product.image} alt="" />
        <p>{product.title}</p>
        <p>{product.price} &#8364;</p>
        <Link to={`/details/${product.id}`} className='see-details-link'>See details</Link>
    </div>
  )
}

export default ProductCard