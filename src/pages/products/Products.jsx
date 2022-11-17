import "./products.scss";
import searchIcon from "../../assets/search.svg";
import { useContext, useEffect, useState } from "react";
import { ecomContext } from "../../context/ContextApi";
import axios from "axios";
import Filter from "../../components/filterSection/Filter";

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
        <Filter />
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
