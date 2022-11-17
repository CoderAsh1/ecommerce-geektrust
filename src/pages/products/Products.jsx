import "./products.scss";
import searchIcon from "../../assets/search.svg";
import { useContext, useEffect, useState } from "react";
import { ecomContext } from "../../context/ContextApi";
import axios from "axios";

const Products = () => {
  const {
    state: { products, cart },
    dispatch,
  } = useContext(ecomContext);

  async function fetchData() {
    let data = await axios.get(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    dispatch({ type: "response-sucess", payload: data.data });
  }

  console.log(cart);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="search">
        <input type="text" name="" id="" placeholder="search for products..." />
        <div className="s-icon">
          <img src={searchIcon} alt="" width={"15px"} />
        </div>
      </div>
      <div className="productspage">
        <div className="filters">
          <div className="color">
            <h3>Color</h3>
            <label htmlFor="red">
              <input
                type="checkbox"
                name="red"
                onClick={dispatch({ type: "color-red", payload: "red" })}
              />
              Red
            </label>
            <label htmlFor="green">
              <input type="checkbox" name="green" />
              Green
            </label>
            <label htmlFor="blue">
              <input type="checkbox" name="blue" />
              Blue
            </label>
          </div>
          <div className="gender">
            <h3>Gender</h3>
            <label htmlFor="men">
              <input type="checkbox" name="men" />
              Men
            </label>
            <label htmlFor="women">
              <input type="checkbox" name="women" />
              Women
            </label>
          </div>
          <div className="price">
            <h3>Price</h3>
            <label htmlFor="250">
              <input type="checkbox" name="250" />0 - Rs.250
            </label>
            <label htmlFor="450">
              <input type="checkbox" name="450" />
              Rs.251 - Rs.450
            </label>
            <label htmlFor="450+">
              <input type="checkbox" name="450+" />
              Rs.450
            </label>
          </div>
          <div className="type">
            <h3>Type</h3>
            <label htmlFor="polo">
              <input type="checkbox" name="polo" />
              Polo
            </label>
            <label htmlFor="Hoodie">
              <input type="checkbox" name="Hoodie" />
              Hoodie
            </label>
            <label htmlFor="Basic">
              <input type="checkbox" name="Basic" />
              Basic
            </label>
          </div>
        </div>
        <div className="products">
          {products.map((prod) => (
            <div className="product" key={prod.id}>
              <img src={prod.imageURL} alt="imageURL" width={"80%"} />
              <div className="price">
                <h4>Rs.{prod.price}</h4>
                {cart.find((p) => p.id === prod.id) ? (
                  <button
                    onClick={() =>
                      dispatch({ type: "remove-from-cart", payload: prod.id })
                    }
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      dispatch({ type: "add-to-cart", payload: prod })
                    }
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
