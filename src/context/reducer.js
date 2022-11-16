export default function reducer(state, action) {
  switch (action.type) {
    case "response-sucess":
      return [action.payload];
    default:
      return state;
  }
}
