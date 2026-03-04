import React from "react";
import ProductList from "../components/ProductList";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/cart/cartSlice";

function Home() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div style={{ padding: "30px"}}>
      <h1>ShoppyGlobe</h1>
      <div style={{ padding: "10px",}}></div>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      <ProductList />
    </div>
  );
}

export default Home;