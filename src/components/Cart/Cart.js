import classes from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart = (props) => {
    const cartItems = (<ul className={classes['cart-items']}>{[{id:'c1',name:'sushi',amount:2,price:250}].map((item) => (
        <li>{item.name}</li>
    ))}</ul>);
  return(
    <Modal onClose = {props.onClose}>
        {cartItems}
        <di className = {classes.total}>
            <span>Total Amount</span>
            <span>Rs.450</span>
        </di>
        <div className={classes.actions} >
            <button className={classes['button--alt']} onClick = {props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>

    </Modal>
  );
}
export default Cart;