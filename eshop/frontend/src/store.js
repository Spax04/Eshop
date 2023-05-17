import React, { useReducer } from 'react'
import { createContext } from 'react'

export const Store = createContext()

const initialState = {
  cart: {
    cartItems: []
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Getting new item that was added to cart with new parameter: QUANTITY
      const newItem = action.payload

      const existingItem = state.cart.cartItems.find(
        item => item.id === newItem.id
      )

      // If new item already exist in cart,it replace an old item to new with new QUANTITY ,else adding new item in cart.cartItems
      const cartItems = existingItem
        ? state.cart.cartItems.map(item =>
            item._id === existingItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem]

      // localStorage.setItem('cartItems', JSON.stringify(cartItems))
      return { ...state, cart: { ...state.cart, cartItems } }

    default:
      return state
  }
}

export function StoreProvider (props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = { state, dispatch }

  // Every child element will get "reducer" of cart
  return <Store.Provider value={value}> {props.children} </Store.Provider>
}
