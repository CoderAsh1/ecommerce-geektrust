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
          <>
            <div className="item" key={item.id}>
              <img src={item.imageURL} alt="imageURL" width={"50px"} />
              <div className="title-price">
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
              </div>
              <div className="count">
                <button
                  className={item.qty === 1 && "disable"}
                  onClick={() =>
                    item.qty !== 1 &&
                    dispatch({ type: "remove-qty", payload: item.id })
                  }
                >
                  -
                </button>
                <h4> {item.qty}</h4>
                <button
                  className={item.qty === item.quantity && "disable"}
                  onClick={() =>
                    item.qty < item.quantity &&
                    dispatch({ type: "add-qty", payload: item.id })
                  }
                >
                  +
                </button>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "remove-from-cart", payload: item.id })
                }
              >
                Delete
              </button>
              {item.qty === item.quantity && (
                <h6 className="qty-alert">Max Quantity reached</h6>
              )}
            </div>
          </>
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
