import { createContext, useContext } from "react";
import "./App.scss";
import cartIcon from "./assets/cart-shopping-solid.gif";
import { ecomContext } from "./context/ContextApi";
import Products from "./pages/products/Products";
function App() {
  const {
    state: { cart },
  } = useContext(ecomContext);

  return (
    <div className="App">
      <nav>
        <h3>Teerex Store</h3>
        <span>Products</span>
        <div className="cart">
          <img src={cartIcon} alt="cartIcon" height={"40px"} />
          <span>{cart.length}</span>
        </div>
      </nav>
      <Products />
    </div>
  );
}

export default App;
