//manage the context
import CartContext from "./Cart-context";
import React from "react";

const CartProvider = (props) =>{
    const addItemToCartHandler = (item) => {};
    const removeItemCartHandler = (id) => {};
    const cartContext = {
        item:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemCartHandler

    };
 return(<CartContext.Provider value={cartContext}>
    {props.children}
 </CartContext.Provider>);
}
export default CartProvider;
