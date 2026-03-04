import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const placeOrder = () => {
    alert("Order placed");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <input placeholder="Enter Name" />
      <input placeholder="Enter Address" />
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;