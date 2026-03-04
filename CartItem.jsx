import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div>
        <h4>{item.title}</h4>
       <p>₹{(item.price * 83).toFixed(2)}</p>
      </div>

      <div>
        <button
          className="qty"
          onClick={() => dispatch(increaseQty(item.id))}>+</button>

        <button
          className="qty"
          onClick={() => dispatch(decreaseQty(item.id))}>-</button>

        <button
          onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;