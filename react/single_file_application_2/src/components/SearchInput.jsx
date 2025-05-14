import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchInput = () => {
  let { name } = useParams();
  let[products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        let filteredProducts = response.data.filter((product) =>
          product.category.toLowerCase().includes(name.toLowerCase())
        );
        // console.log(filteredProducts);
        setProducts(filteredProducts)
      })
      .catch((error) => console.log(error));
  });

  return <>
  <div className="container">
        {products.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title.slice(0,20)}</h3>
              <p className="cost">${product.price}</p>
              <p className="category">{product.category}</p>
            </div>
          );
        })}
      </div>
  
  
  </>;
};

export default SearchInput;



