import "./products.scss";
import searchIcon from "../../assets/search.svg";
import { useContext, useEffect, useState } from "react";
import { ecomContext } from "../../context/ContextApi";
import axios from "axios";
import Filter from "../../components/filterSection/Filter";

const Products = () => {
  const [searchValue, setSearchValue] = useState("");

  const {
    state: { products, cart },
    dispatch,
    filter,
    filterDispatch,
  } = useContext(ecomContext);

  const {
    searchQuery,
    red,
    green,
    blue,
    men,
    women,
    price0,
    price251,
    price450,
    polo,
    hoodie,
    basic,
  } = filter;

  async function fetchData() {
    let data = await axios.get(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    dispatch({ type: "response-sucess", payload: data.data });
  }

  function filterProdFunction() {
    let setProducts = products;
    if (searchQuery) {
      setProducts = setProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    if (red) {
      setProducts = setProducts.filter((prod) => prod.color === "Red");
    }
    if (green) {
      setProducts = setProducts.filter((prod) => prod.color === "Green");
    }
    if (blue) {
      setProducts = setProducts.filter((prod) => prod.color === "Blue");
    }
    if (men) {
      setProducts = setProducts.filter((prod) => prod.gender === "Men");
    }
    if (women) {
      setProducts = setProducts.filter((prod) => prod.gender === "Women");
    }
    if (price0) {
      setProducts = setProducts.filter((prod) => prod.price <= 250);
    }
    if (price251) {
      setProducts = setProducts.filter(
        (prod) => prod.price > 250 && prod.price <= 450
      );
    }
    if (price450) {
      setProducts = setProducts.filter((prod) => prod.price > 450);
    }
    if (polo) {
      setProducts = setProducts.filter((prod) => prod.type === "Polo");
    }
    if (hoodie) {
      setProducts = setProducts.filter((prod) => prod.type === "Hoodie");
    }
    if (basic) {
      setProducts = setProducts.filter((prod) => prod.type === "Basic");
    }

    return setProducts;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="search for products..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div
          className="s-icon"
          onClick={() =>
            filterDispatch({ type: "input-sucess", payload: searchValue })
          }
        >
          <img src={searchIcon} alt="" width={"15px"} />
        </div>
      </div>
      <div className="productspage">
        <Filter />
        <div className="products">
          {filterProdFunction().map((prod) => (
            <div className="product" key={prod.id}>
              <img src={prod.imageURL} alt="imageURL" width={"80%"} />
              <div className="price">
                <h4>Rs.{prod.price}</h4>
                {cart.find((p) => p.id === prod.id) ? (
                  <button
                    style={{ background: "rgb(230, 8, 8)" }}
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
