import { createContext, useContext, useReducer } from 'react'
import { initialState, reducer } from './store'

  // preparing the data layers
  const storeContext = createContext()
  const dispatchContext = createContext()
  
  
  
  // creating and wrapping our top level compent : children with the store context
  export const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState)
    
    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>
          {children}
        </storeContext.Provider>
      </dispatchContext.Provider>
    )
  }
  
  // preparing the hooks for use...
  export function useStore() {
    return useContext(storeContext)
  }
  
  export function useDispatch() {
      return useContext(dispatchContext)
  }


