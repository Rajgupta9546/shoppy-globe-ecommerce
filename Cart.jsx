import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const items = useSelector(state => state.cart.items);

 const totalPrice = items.reduce(
  (total, item) => total + (item.price * 83) * item.quantity,
  0
);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {items.length === 0 && <p>Cart is empty</p>}

      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      {items.length > 0 && (
        <>
          <div className="total-box">
            Total: ₹{totalPrice.toFixed(2)}
          </div>

          <Link to="/checkout">
            <button style={{marginTop:"15px"}}>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;