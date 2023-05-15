//root component
import React from "react";
import { useState } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const shownCartHandler = (event) => {
    setCartIsShown(true);
  }
  const hideCartHandler = (event) => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {/* cart component rendering so we use state in this file */}
      {/* intially cartisshown false so its disapperaing */}
     {cartIsShown && <Cart onClose = {hideCartHandler}/>}
    <Header onShowCart = {shownCartHandler}/>

      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
