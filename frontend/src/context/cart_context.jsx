import React, { useEffect, useReducer } from 'react'
import cartReducer from '../reducers/cart_Reducer'
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, TOGGLE_AMOUNT, COUNT_CART_TOTALS } from '../reducers/actions'
import { redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
const CartContext = React.createContext()



const getLocalStorage = () => {
    let cart = localStorage.getItem('cart');

    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}

const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534
}    


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    const [notify, setNotify] = useState(false)
    const addToCart = (id, color, amount, product) => {
        dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
        setNotify(true)
        setTimeout(() => {
            setNotify(false)
        }, 3000)
    }

    // remove item
    const removeItem = (id) => {
        dispatch({ type: REMOVE_FROM_CART, payload: id})
    }
    // toggle amount
    const toggleAmount = (id, value) => {
        dispatch({ type: TOGGLE_AMOUNT, payload: {id, value}})
        
    }
    // clearCart
    const clearCart = () => {
        dispatch({ type: CLEAR_CART})

    }

    useEffect(() => {
        dispatch({ type:COUNT_CART_TOTALS})
        localStorage.setItem('cart',  JSON.stringify(state.cart))
    }, [state.cart])
    

  return (
      <CartContext.Provider value={{...state, addToCart, removeItem, toggleAmount, clearCart, setNotify,notify}}>
          {children}
      </CartContext.Provider>
  )
}

export const UseCartContext = () => {
    return React.useContext(CartContext)
}