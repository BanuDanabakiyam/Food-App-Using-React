//store is kind of convension in react world.
// create context
import React from "react";
const CartContext = React.createContext({
    item:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
}
    
);
export default CartContext;