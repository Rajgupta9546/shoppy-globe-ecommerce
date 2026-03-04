import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../index.css";

function Header() {
  const cartItems = useSelector(state => state.cart.items);

  const totalQty = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="header">
      <h2>ShoppyGlobe</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({totalQty})</Link>
      </div>
    </div>
  );
}

export default Header;