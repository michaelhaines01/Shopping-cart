import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
export const CartContext = createContext({});

export const CartProvider = (props) => {
  const [cart, setcart] = useState([]);
  const [qty, setqty] = useState(0);

  return (
    <CartContext.Provider value={[cart, setcart, qty, setqty]}>
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
