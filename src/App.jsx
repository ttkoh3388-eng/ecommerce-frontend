
import Navbar from "./Navbar";

// pages
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import ProductPage from "./ProductPage";
import ShoppingCart from "./ShoppingCart";

// imports for wouter
import { Route, Switch } from "wouter";
import FlashMessageDisplay from "./FlashMessageDisplay";

import "./App.css";

export default function App() {

 

  return (<>

    <FlashMessageDisplay/>
   
    <Navbar/>

    {/* <switch> id the part of the screen that changes depending on the URL of the browser */}
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/products" component={ProductPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/cart" component={ShoppingCart}/>
    </Switch>

    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>

  </>)
}