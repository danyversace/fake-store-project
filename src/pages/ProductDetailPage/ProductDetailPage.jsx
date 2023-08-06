//rfce
import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { CartContext } from '../../contexts/CartContext';
import './ProductDetailPage.css'

function ProductDetailPage() {
  
  // get the global state
  //NOTE {} NOT []

  const {addProduct, cart, removeProduct} = useContext(CartContext)

  const [isInCart, setIsInCart] = useState(false)

      //create state to hold details for this product

      const [product, setProduct] = useState([])

    //this page shows details for a specific product
    
    //how do i know which product??????

    const {productId} = useParams()
    console.log('datatype is', typeof(productId))
    //get the details for the product when the page loads

    useEffect (
      ()=> {
        // is product in cart?
        setIsInCart(cart?.find(item=>item.id==productId))
        
      },[cart] //runs anytime in cart products changes
    )

    useEffect(
      ()=>{
        console.log('get data for product', productId)
        //call api to get data
        //https://fakestoreapi.com/products/1
        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(res =>{
          console.log(res.data)
          // storing data in state
          setProduct(res.data)

        })
        .catch(err=>console.log(err))


      }, [] //run once when the page loads
    )
    






  return (
    <div className='details-container'>
      <img src={product.image} alt="" />
      <div className='container-info'>
        <p className='container-item title'>{product?.title}</p>
        <p className='container-item price'>{product?.price} &#8364;</p>
        <p className='container-item description'>Description</p>
        <p className='container-item product-description'>{product?.description}</p>
        {
          isInCart?
          <button 
          className='container-item remove-btn'
          onClick={()=>removeProduct(product.id)}
          >Remove</button>
          :
          <button 
          className='container-item add-btn'
          onClick={()=>addProduct(product)}
          >Add to Cart
          </button>
        }
        
      </div> 
    </div>
  )
}

export default ProductDetailPage