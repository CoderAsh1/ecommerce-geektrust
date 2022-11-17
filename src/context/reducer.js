export default function reducer(state, action) {
  switch (action.type) {
    case "response-sucess":
      return { ...state, products: action.payload };
    case "add-to-cart":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "remove-from-cart":
      return {
        ...state,
        cart: [...state.cart.filter((p) => p.id !== action.payload)],
      };
    //filters -Color --------------------------------->

    default:
      return state;
  }
}
