import { useContext, useState } from "react";
import { ecomContext } from "../../context/ContextApi";
import "./filter.scss";

const Filter = ({ id }) => {
  const {
    filter: {
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
    },
    filterDispatch,
  } = useContext(ecomContext);

  return (
    <div id="filters" className={id}>
      <div className="color">
        <h3>Color</h3>
        <label htmlFor="red">
          <input
            type="checkbox"
            id="red"
            checked={red}
            onChange={() => filterDispatch({ type: "col-red", payload: !red })}
          />
          Red
        </label>
        <label htmlFor="green">
          <input
            type="checkbox"
            id="green"
            checked={green}
            onChange={() =>
              filterDispatch({ type: "col-green", payload: !green })
            }
          />
          Green
        </label>
        <label htmlFor="blue">
          <input
            type="checkbox"
            id="blue"
            checked={blue}
            onChange={() =>
              filterDispatch({ type: "col-blue", payload: !blue })
            }
          />
          Blue
        </label>
      </div>
      <div className="gender">
        <h3>Gender</h3>
        <label htmlFor="men">
          <input
            type="checkbox"
            id="men"
            checked={men}
            onChange={() => filterDispatch({ type: "gen-men", payload: !men })}
          />
          Men
        </label>
        <label htmlFor="women">
          <input
            type="checkbox"
            id="women"
            checked={women}
            onChange={() =>
              filterDispatch({ type: "gen-women", payload: !women })
            }
          />
          Women
        </label>
      </div>
      <div className="price">
        <h3>Price</h3>
        <label htmlFor="250">
          <input
            type="checkbox"
            id="250"
            checked={price0}
            onChange={() =>
              filterDispatch({ type: "price-0", payload: !price0 })
            }
          />
          0 - Rs.250
        </label>
        <label htmlFor="450">
          <input
            type="checkbox"
            id="450"
            checked={price251}
            onChange={() =>
              filterDispatch({ type: "price-251", payload: !price251 })
            }
          />
          Rs.251 - Rs.450
        </label>
        <label htmlFor="450+">
          <input
            type="checkbox"
            id="450+"
            checked={price450}
            onChange={() =>
              filterDispatch({ type: "price-450", payload: !price450 })
            }
          />
          Rs.450
        </label>
      </div>
      <div className="type">
        <h3>Type</h3>
        <label htmlFor="polo">
          <input
            type="checkbox"
            id="polo"
            checked={polo}
            onChange={() =>
              filterDispatch({ type: "type-polo", payload: !polo })
            }
          />
          Polo
        </label>
        <label htmlFor="Hoodie">
          <input
            type="checkbox"
            id="Hoodie"
            checked={hoodie}
            onChange={() =>
              filterDispatch({ type: "type-hoodie", payload: !hoodie })
            }
          />
          Hoodie
        </label>
        <label htmlFor="Basic">
          <input
            type="checkbox"
            id="Basic"
            checked={basic}
            onChange={() =>
              filterDispatch({ type: "type-basic", payload: !basic })
            }
          />
          Basic
        </label>
      </div>
    </div>
  );
};

export default Filter;
