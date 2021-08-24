import React, { useContext } from "react";
import { Logo } from "../images/index.js";
import { Link } from "react-router-dom";
import { CartContext } from "./context.js";
import { FiShoppingCart } from "react-icons/fi";
import "./nav.css";

const Nav = () => {
  // sum values in the cart
  const [cart] = useContext(CartContext);
  //adds up total

  //adds up qty
  const totalitems = cart.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <nav className="nav-wrapper">
      <Link className="link" to="/">
        <div className="logo-wrapper">
          <img src={Logo}></img>
        </div>
      </Link>

      <Link className="link" to="/shop">
        <h4>Shop</h4>
      </Link>

      <div className="cart-wrapper">
        <Link className="link" to="/cart">
          <FiShoppingCart size={30} />
        </Link>
        <h4>{totalitems}</h4>
      </div>
    </nav>
  ); //look it up stupid
};
export default Nav;
