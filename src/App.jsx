import "./App.scss";
import cartIcon from "./assets/cart-shopping-solid.gif";
import Products from "./pages/products/Products";
function App() {
  return (
    <div className="App">
      <nav>
        <h3>Teerex Store</h3>
        <span>Products</span>
        <div className="cart">
          <img src={cartIcon} alt="cartIcon" height={"40px"} />
          <span>12</span>
        </div>
      </nav>
      <Products />
    </div>
  );
}

export default App;
