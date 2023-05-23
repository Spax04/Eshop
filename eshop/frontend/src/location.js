import { useReducer, createContext, LocationReducer } from './imports'

// LocatorProvider represents
export const LocationContext = createContext()

export function LocationProvider (props) {
  const [{ currentLocation }, dispatch] = useReducer(LocationReducer, {
    currentLocation: ''
  })

  const value = { currentLocation, dispatch }

  // Every child element will get "reducer" of updating user's current location
  return (
    <LocationContext.Provider value={value}>
      {' '}
      {props.children}{' '}
    </LocationContext.Provider>
  )
}
