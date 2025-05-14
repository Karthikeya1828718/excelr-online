import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  let { id } = useParams();
  let [product, setProduct] = useState({});
  let [isFetch, setIsFetch] = useState(false);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setIsFetch(true);
      })
      .catch((err) => console.log(err));
  }, []);

  let handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://fakestoreapi.com/products/${id}`, product)
      .then((res) => {
        alert("Product updated successfully");
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {isFetch && (
        <form>
          Title{" "}
          <input
            type="text"
            defaultValue={product.title}
            onChange={handleChange}
          />
          <br />
          Price{" "}
          <input
            type="text"
            defaultValue={product.price}
            onChange={handleChange}
          />
          <br />
          Category{" "}
          <input
            type="text"
            defaultValue={product.category}
            onChange={handleChange}
          />
          <br />
          <button onClick={handleSubmit}>Edit</button>
        </form>
      )}
    </>
  );
};

export default EditProduct;
