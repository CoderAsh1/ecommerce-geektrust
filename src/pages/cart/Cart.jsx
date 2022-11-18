import { useContext } from "react";
import "./cart.scss";
import { ecomContext } from "../../context/ContextApi";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(ecomContext);

  console.log(cart);
  return (
    <div className="cart">
      <h4>Shopping Cart</h4>
      <div className="items">
        {cart.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.imageURL} alt="imageURL" width={"50px"} />
            <div className="title-price">
              <p>{item.name}</p>
              <p>Rs.{item.price}</p>
            </div>
            <div className="count">
              <button>-</button>
              <h4> {item.qty}</h4>
              <button>+</button>
            </div>
            <button>Delete</button>
          </div>
        ))}
        <hr />
        <h4 className="total">
          Total amount : {cart.reduce((acc, cur) => acc + cur.price, 0)}
        </h4>
      </div>
    </div>
  );
};

export default Cart;
