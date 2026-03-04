import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { convertToRupees } from "../utils/currency";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={product.thumbnail} loading="lazy" />
      <h3>{product.title}</h3>
      <p>₹{convertToRupees(product.price)}</p>

      <Link to={`/product/${product.id}`}>View</Link>

      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;