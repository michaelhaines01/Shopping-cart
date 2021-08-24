import React, { useContext } from "react";
import { CartContext } from "./context.js";
import { Link } from "react-router-dom";
import "./cart.css";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const cartcontext = useContext(CartContext);
  const [cart, setcart] = cartcontext;

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const remove = (id) => {
    const update = cart.filter((item) => item.id !== id);
    setcart(update);
  };

  return (
    <div className="grid">
      <div className="purchase-card">
        <div className="purchase-info">
          <h1>Order summary</h1>
          <h3>Shipping $0.00</h3>
          <h1>Total ${totalPrice.toFixed(2)}</h1>
          <button>Check out</button>
        </div>
      </div>

      <div className="item-grid">
        <div className="item-header">
          <h1>{cart.length} Item(s) in cart</h1>
        </div>
        {cart.map((item) => (
          <div className="item" key={item.id}>
            <div className="cart-img-wrapper">
              <img src={item.image}></img>
            </div>
            <h5>${item.price}</h5>
            <Link className="link" to={`/shop/${item.id}`}>
              <h5>{item.name}</h5>{" "}
            </Link>
            <h5>Quantity {item.qty}</h5>

            <button
              onClick={() => {
                remove(item.id);
              }}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cart;
