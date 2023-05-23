// Uploading data status
export const UploadingReducer = (state, action) => {
  switch (action.type) {
    case 'GET_REQUEST':
      return { ...state, loading: true }
    case 'GET_SUCCESS':
      return { ...state, product: action.payload, loading: false }
    case 'GET_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

// Updating current location of user
export const LocationReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION': {
      console.log(action.payload)
      return { ...state, currentLocation: action.payload }
    }
    default:
      return state
  }
}

// Adding new item into the cart
export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      // Getting new item that was added to cart with new parameter: QUANTITY
      const newItem = action.payload

      const existingItem = state.cart.cartItems.find(
        item => item._id === newItem._id
      )

      // If new item already exist in cart,it replace an old item to new with new QUANTITY ,else adding new item in cart.cartItems
      const cartItems = existingItem
        ? state.cart.cartItems.map(item =>
            item._id === existingItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem]

      console.log(state.cart)

      localStorage.setItem('cartItems', JSON.stringify(cartItems))

      return { ...state, cart: { ...state.cart, cartItems } }
    }

    case 'REMOVE_FROM_CART': {
      // Filtering cuurent cart without specific item
      const cartItems = state.cart.cartItems.filter(
        item => item._id !== action.payload._id
      )

      localStorage.setItem('cartItems', JSON.stringify(cartItems))

      return { ...state, cart: { ...state.cart, cartItems } }
    }

    default:
      return state
  }
}
