import React from "react";
import "./shop.css";
import Fins from "../data/fins.js";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="card-grid">
        {Fins.map((item) => (
          <div className="card" key={item.id}>
            <Link className="link" to={`/shop/${item.id}`}>
              <div className="shop-img-wrapper">
                <img src={item.image}></img>
              </div>
              <h5>${item.price}</h5>
              <h5>{item.name}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;
