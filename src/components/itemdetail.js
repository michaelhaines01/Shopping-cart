import React, { useEffect, useState, useContext } from "react";
import "./itemdetail.css";
import Fins from "../data/fins.js";
import { CartContext } from "./context.js";
import { BiPlusCircle } from "react-icons/bi";
import { AiOutlineMinusCircle } from "react-icons/ai";

const Itemdetail = (match) => {
  const [item, setItem] = useState({});
  const [qty, setqty] = useState(1);
  const cartcontext = useContext(CartContext);
  const [cart, setcart] = cartcontext;

  useEffect(() => {
    fetchItem();
  });

  const fetchItem = () => {
    const id = match.props.match.params.id;
    let item = Fins.find((item) => item.id == id);
    setItem(item);
  };

  const addtocart = (item) => {
    //Looks in cart and finds if there is any
    let checkitem = cart.find((i) => i.id === item.id);
    if (checkitem != undefined) {
      checkitem.qty += qty;
      const update = cart.filter((i) => i.id !== item.id);
      update.push(checkitem);
      setcart(update);
    } else {
      item.qty = qty;
      setcart((curr) => [...curr, item]);
    }
  };

  return (
    <div className="itemwrapper">
      <h1>{item.name}</h1>
      <h3>{item.description}</h3>
      <div className="img-wrapper">
        <img src={item.image}></img>
      </div>
      <h3>${item.price}</h3>
      <div className="btn-wrapper">
        <button
          onClick={() => {
            addtocart(item);
          }}
        >
          Add to cart
        </button>
        <button
          onClick={() => {
            setqty((prev) => prev + 1);
          }}
        >
          <BiPlusCircle size={25} />
        </button>
        <h6>{qty}</h6>
        <button
          onClick={() => {
            setqty((prev) => prev - 1);
          }}
        >
          <AiOutlineMinusCircle size={25} />
        </button>
      </div>
    </div>
  );
};
export default Itemdetail;
