import React from "react";
import Product from "./product";
import "./products.css";

const DUMMY_PRODUCTS = [
  {
    name: "Mobile phine",
    image: "../public/project2.jpg",
    price: 378,
    description: "This is mobile phone",
    quntity: 12,
  },
  {
    name: "Mobile phine",
    image: "../public/project2.jpg",
    price: 434,
    description: "This is mobile phone",
    quntity: 12,
  },
  {
    name: "Mobile phine",
    image: "../public/project2.jpg",
    price: 398,
    description: "This is mobile phone",
    quntity: 12,
  },
  {
    name: "Mobile phine",
    image: "../public/project2.jpg",
    price: 397,
    description: "This is mobile phone",
    quntity: 12,
  },
  {
    name: "Mobile phine",
    image: "../public/project2.jpg",
    price: 378,
    description: "This is mobile phone",
    quntity: 12,
  },
  {
    name: "Mobile phine",
    image: "../public/project2.jpg",
    price: 378,
    description: "This is mobile phone",
    quntity: 12,
  },
  {
    name: "Mobile phine",
    image: "../public/project2.jpg",
    price: 378,
    description: "This is mobile phone",
    quntity: 12,
  },
  {
    name: "Mobile phine",
    image: "../public/project2.jpg",
    price: 378,
    description: "This is mobile phone",
    quntity: 12,
  },
  {
    name: "Mobile phine",
    image: "../public/project2.jpg",
    price: 378,
    description: "This is mobile phone",
    quntity: 12,
  },
];

const Products = () => {
  return (
    <div className="main">
      <ul>
        {DUMMY_PRODUCTS.map((product, key) => (
          <li key={key}>
            <Product
              id={key}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
              quantity={product.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
