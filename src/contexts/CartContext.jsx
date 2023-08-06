import {useState, createContext, useEffect} from 'react';



// create context
export const CartContext = createContext()

export default function CartContextProvider(props){
    //create a global state
    const [cart, setCart] = useState([])


    
    useEffect(
        ()=> {
            //when page loads, check if there is value in localStorage
            const storedCart = localStorage.getItem('cartList')
            console.log(storedCart)
            //if there was a value use it
            if (storedCart) {
                setCart(JSON.parse(storedCart))
            }
        },[]
    )
    

    //nees useEffect that runs whenever cart changes

    useEffect(
        ()=> {
           // console.log('darkMode now', darkMode)
            // save current state to localStorage
            localStorage.setItem('cartList', JSON.stringify(cart))

        }, [cart] // runs anytime darkMode changes
    )


    //need a function to add aa charcter to a state


    //this function will add a prosuct to the list

        




    const addProduct = (prodToAdd) => {
        console.log('adding', prodToAdd)
        //verify that i have the data of the product to add
        let newCart = [...cart, prodToAdd]
        //let cartTotal = 0
        //newCart.forEach(item=>cartTotal+=item.price)
        //setTotal(cartTotal)
        console.log(newCart)
        //update state
        setCart(newCart)
    }

    const removeProduct = (prodId) => {
        console.log('removing', prodId)
        // remove this character from favorites
        let newCart = cart.filter(item=>item.id != prodId)
        //update state
        setCart(newCart)

    }


    return(
        <CartContext.Provider value={{cart, addProduct, removeProduct, setCart}}>
            {props.children}

        </CartContext.Provider>
    )
}