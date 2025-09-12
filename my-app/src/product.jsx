import React from "react";
import "./product.css";

// Product.js
const Product = ({ id, name, image, price, description }) => {
  return (
    <div className="product" key={id}>
      <div className="card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h3>{description}</h3>
        <p>Price:${price}</p>
        <button>Delete</button>
        <button>Edite</button>
      </div>
    </div>
  );
};

export default Product;
