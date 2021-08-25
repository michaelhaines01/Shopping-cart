import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Cart from "./components/cart.js";
import Nav from "./components/nav.js";
import Shop from "./components/shop.js";

import { CartProvider } from "./components/context.js";
import Itemdetail from "./components/itemdetail.js";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route exact path={["/", "/Shopping-cart"]} component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/shop" component={Shop} />
          <Route
            exact
            path="/shop/:id"
            render={(routeProps) => <Itemdetail props={routeProps} />}
          />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
};
export default App;
