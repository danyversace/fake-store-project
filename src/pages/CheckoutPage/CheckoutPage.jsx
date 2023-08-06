import React, {useContext, useState, useEffect} from 'react'
import './CheckoutPage.css'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../../components/CartItem/CartItem'
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)"
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function CheckoutPage({product}) {

  const navigate = useNavigate()

  const showHome = () => {
    // navigate to homepage
    navigate('/')
    // clear the cart 
    setCart([])
  }

  const [isOpen, setIsOpen] = useState(false)

  const {cart, setCart} = useContext(CartContext)

  const [total, setTotal] = useState(0)

  //

  
 

  // get the global state
  //NOTE {} NOT []



  // when the cart changes i need to calculate the total
  
  //calculate the total
  //console.log the answer
  // create stete called total and display



    useEffect (
    ()=> {
     let sum = 0
      for (let i = 0; i < cart.length; i++) {
     sum = sum + cart[i].price
    // console.log(cart[i].price)
      }
      console.log(`sum`, sum)
      setTotal(sum)
        }, [cart]
      )


  


  return (
    <div className='checkout-container'>
        <div className='checkout-items'>
          {
            cart.map(item=><CartItem key={item.id} 
            product={item}/>)
          }
          
        </div>
        <div className='total-container'>
          <div className='checkout-items-container'>
              <p className='checkout-items total-check'>Total: {total}&#8364;</p>
              <button className='checkout-items checkout-btn'onClick={()=>setIsOpen(true)}
              >Checkout</button>
              <Modal
                isOpen={isOpen}
                //onRequestClose={()=>setIsOpen(false)}
                style={customStyles}
                contentLabel="Cobstact Us Modal"
              >
              <div className='modal-header'>
                <h3>
                Your Order was successful!
                </h3>
                <h4>
                Check your email for the order confirmation. 
                Thank you for shopping with Fake Store!
                </h4>
                <button className='modal-close-btn'
                onClick={()=>showHome()}
                >
                  Return to Main Page
                </button>
              </div>
              </Modal>
          </div>
        </div>
    </div>
  )
}

export default CheckoutPage 