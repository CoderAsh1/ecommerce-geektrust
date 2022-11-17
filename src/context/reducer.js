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
    default:
      return state;
  }
}

export function filterReducer(filter, action) {
  switch (action.type) {
    case "input-sucess":
      return { ...filter, searchQuery: action.payload };
    case "col-red":
      return { ...filter, red: action.payload };
    case "col-green":
      return { ...filter, green: action.payload };
    case "col-blue":
      return { ...filter, blue: action.payload };
    case "gen-men":
      return { ...filter, men: action.payload };
    case "gen-women":
      return { ...filter, women: action.payload };
    case "price-0":
      return { ...filter, price0: action.payload };
    case "price-251":
      return { ...filter, price251: action.payload };
    case "price-450":
      return { ...filter, price450: action.payload };
    case "price-450":
      return { ...filter, price450: action.payload };
    case "price-450":
      return { ...filter, price450: action.payload };
    case "type-polo":
      return { ...filter, polo: action.payload };
    case "type-hoodie":
      return { ...filter, hoodie: action.payload };
    case "type-basic":
      return { ...filter, basic: action.payload };
  }
}
