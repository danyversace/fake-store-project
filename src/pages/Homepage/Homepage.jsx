// rfce
import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'


function Homepage() {

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  

  useEffect(()=>{
        console.log('homeage loaded')
        // make api call to get categories data
        // hhttps://fakestoreapi.com/products/categories
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res=>{
          console.log(res.data)
          // need to store the data in state
            setCategories(res.data)
        })
        .catch(err=>console.log(err))

        // make api call to get the product data
        // https://fakestoreapi.com/products
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
          console.log(res.data)

          setProducts(res.data)
        })
        .catch(err=>console(err))



    }, [] // run once when the page loads
    
)

const getCategory = (category) => {
    console.log(category)
    //I need to get products that are in this category
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>{
      console.log(res.data)
      setProducts(res.data)
    })
    .catch(err=>console.log(err))
    
}

const getAllCategories = (all) => {
  
  //I need to get all products in the categories
  axios.get('https://fakestoreapi.com/products')
  .then(res=>{
    setProducts(res.data)
  })
  .catch(err=>console.log(err))
  
}



  return (
    <div className='homepage-container'>
      <div className='categories-container'>
        <p className='p-category'
        onClick={()=>getAllCategories()}
        >All</p>
      {
        categories.map(item=><p 
        className='p-category'  
        key={item}
        onClick={()=>getCategory(item)}
        >{item}</p>)
      }
      </div>
        <div className='products-conatainer'>
          {
            
            //products.map(item=><p key={item.id}>{item.title}</p>)

            products.map(item=><ProductCard key={item.id} 
            product={item}/>)
          } 
        </div>
    </div>
  )
}

export default Homepage