import { createContext, useReducer } from "react";
import reducer, { filterReducer } from "./reducer";

export const ecomContext = createContext();

const ContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
  });

  const [filter, filterDispatch] = useReducer(filterReducer, {
    searchQuery: "",
    red: false,
    green: false,
    blue: false,
    men: false,
    women: false,
    price0: false,
    price251: false,
    price450: false,
    polo: false,
    hoodie: false,
    basic: false,
  });

  return (
    <ecomContext.Provider value={{ state, dispatch, filter, filterDispatch }}>
      {children}
    </ecomContext.Provider>
  );
};

export default ContextApi;
