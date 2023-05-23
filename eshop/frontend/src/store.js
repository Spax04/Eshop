import {
  useReducer,
  createContext,
  CartReducer,
} from './imports'

export const Store = createContext()

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
  }
}

export function StoreProvider (props) {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const value = { state, dispatch }

  // Every child element will get "reducer" of cart
  return <Store.Provider value={value}> {props.children} </Store.Provider>
}
