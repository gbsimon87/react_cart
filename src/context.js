import { createContext, useContext, useEffect, useReducer } from "react";

import cartItems from "./data";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART"})
  }
  
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id })
  }
  
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id })
  }
  
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id })
  }

  useEffect(() => {
    console.log('updated');
    dispatch({ type: "GET_TOTALS"})
    return () => {
      console.log('cleanup')
    }
  }, [state.cart])

  return (
    <AppContext.Provider value={{ ...state, clearCart, remove, increase, decrease }}>
      { children }
    </AppContext.Provider>
  )

}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };
