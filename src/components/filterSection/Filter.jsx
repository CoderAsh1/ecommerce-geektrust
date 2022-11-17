import { useContext, useState } from "react";
import { ecomContext } from "../../context/ContextApi";
import "./filter.scss";

const Filter = () => {
  const [checked, setChecked] = useState({
    red: false,
    green: false,
    blue: false,
    men: false,
    women: false,
    price0: false,
    price251: false,
    price450: false,
    polo: false,
    hoodie: false,
    basic: false,
  });

  const {
    state: { products, cart },
    dispatch,
  } = useContext(ecomContext);

  return (
    <div className="filters">
      <div className="color">
        <h3>Color</h3>
        <label htmlFor="red">
          <input
            type="checkbox"
            name="red"
            checked={checked.red}
            onChange={() => setChecked({ ...checked, red: !checked.red })}
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
          <input
            type="checkbox"
            name="men"
            checked={checked.men}
            onChange={() => setChecked({ ...checked, men: !checked.men })}
          />
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
          <input
            type="checkbox"
            name="polo"
            onChange={dispatch({ type: "type-polo", payload: "Polo" })}
          />
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
  );
};

export default Filter;
