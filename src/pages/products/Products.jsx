import "./products.scss";
import searchIcon from "../../assets/search.svg";
import filterIcon from "../../assets/filter.png";
import { useContext, useEffect, useRef, useState } from "react";
import { ecomContext } from "../../context/ContextApi";
import axios from "axios";
import Filter from "../../components/filterSection/Filter";

const Products = () => {
  const [searchValue, setSearchValue] = useState("");
  const [toogleclass, setToogleClass] = useState("none");
  const prodRef = useRef(".productsPage");
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
    try {
      let data = await axios.get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      dispatch({ type: "response-sucess", payload: data.data });
    } catch (error) {
      console.log(error);
    }
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
    prodRef.current.addEventListener("mousedown", (e) => {
      setToogleClass("none");
    });
  }, [toogleclass]);

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="search for products..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.toLocaleLowerCase())}
        />
        <div
          className="s-icon"
          onClick={() =>
            filterDispatch({ type: "input-sucess", payload: searchValue })
          }
        >
          <img src={searchIcon} alt="" width={"15px"} />
        </div>
        <img
          src={filterIcon}
          alt="filterIcon"
          className="filter-icon"
          onClick={() =>
            setToogleClass(toogleclass === "block" ? "none" : "block")
          }
        />
      </div>
      <div className="productspage">
        <Filter id={toogleclass} />
        <div className="products" ref={prodRef}>
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
