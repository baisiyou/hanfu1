import React from 'react'
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, TOGGLE_AMOUNT, COUNT_CART_TOTALS } from './actions'

const cartReducer = (state, action) => {

    if (action.type === ADD_TO_CART) {
        const { id, color, amount, product } = action.payload
        const tempItem = state.cart.find((i) => i.id === id + color)
        if (tempItem) {
            const tempCart = state.cart.map((cardItem) => {
                if (cardItem.id === id + color) {
                    let newAmount = cardItem.amount + amount
                    if (newAmount > cardItem.max) {
                        newAmount = cardItem.max
                    }
                    return { ...cardItem, amount: newAmount }
                } else { 
                    return cardItem
                }
            })
            return {...state, cart: tempCart}
        } else {
            const newItem = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.images[0].url,
                price: product.price,
                max: product.stock
            }
            
            return { ...state, cart: [...state.cart, newItem] }
        }
    }

    if (action.type === REMOVE_FROM_CART) {
        const tempCart = state.cart.filter((item) => item.id !== action.payload)
        return {...state, cart: tempCart}
    }

    if (action.type === CLEAR_CART) {
        return { ...state, cart: []}
    }

    if (action.type === TOGGLE_AMOUNT) {
        const {id, value} = action.payload
        const tempCart = state.cart.map(item => {
            if (item.id === id) {
                if (value === 'inc') {
                    let newAmount = item.amount + 1
                    if (newAmount > item.max) {
                        newAmount = item.max
                    }
                    return {...item, amount: newAmount}
                }
                if (value === 'dec') {
                    let newAmount = item.amount - 1
                    if (newAmount < 1) {
                        newAmount = 1
                    }
                    return {...item, amount: newAmount}
                }

            } else {
                return item
            }
        })
        return {...state, cart: tempCart}
    }

    if (action.type == COUNT_CART_TOTALS) {
        const {
            total_items,
            total_amount
        } = state.cart.reduce((total, cartItem) => {
            const { amount, price } = cartItem
            total.total_items += amount
            total.total_amount += price * amount
            return total
        }, {
            total_items:0,total_amount:0
            })
        return {...state, total_items, total_amount}
    }
}

export default cartReducer