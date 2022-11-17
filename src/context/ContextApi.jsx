import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const ecomContext = createContext();

const ContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
  });

  return (
    <ecomContext.Provider value={{ state, dispatch }}>
      {children}
    </ecomContext.Provider>
  );
};

export default ContextApi;
