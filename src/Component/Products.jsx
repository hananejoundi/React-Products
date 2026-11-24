import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchId, setSearchId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 4)))
      .catch((error) => console.log("Error:", error));
  }, []);

  const handleSearch = () => {
    if (searchId.trim() !== "") {
      navigate(`/details/${searchId}`);
    }
  };

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <div className="search-container">
        <input
          type="number"
          placeholder="Enter product ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <p>{product.price} $</p>

            <button onClick={() => navigate(`/details/${product.id}`)}>
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;