import { useContext } from "react";
import "./App.scss";
import cartIcon from "./assets/cart-shopping-solid.gif";
import { ecomContext } from "./context/ContextApi";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import { Link, Route, Routes } from "react-router-dom";
function App() {
  const {
    state: { cart },
  } = useContext(ecomContext);

  return (
    <div className="App">
      <nav>
        <h3>Teerex Store</h3>
        <span>Products</span>
        <Link className="cartIcon" to="/cart">
          <img src={cartIcon} alt="cartIcon" height={"40px"} />
          <span>{cart.length}</span>
        </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
