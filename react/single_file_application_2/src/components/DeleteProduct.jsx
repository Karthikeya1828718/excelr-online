import axios from "axios";
import React, { useRef, useState } from "react";

const DeleteProduct = () => {
  let id = useRef("");
  let [product, setProduct] = useState(null);
  let handleSubmit = (e) => {
    e.preventDefault();
    if (!id.current.value) {
      alert("pls enter id to delete");
    }
    axios
      .delete("https://fakestoreapi.com/products/" + id.current.value)
      .then((res) => {
        if (res.data === undefined || res.data === null) {
          alert("product not found pls enter correct id");
          setProduct(null);
        } else {
          alert("product deleted successfully");
          setProduct(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form>
        <input type="text" ref={id} placeholder="enter product id" />
        <button onClick={handleSubmit}>Delete</button>
      </form>
      {product && (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
        </div>
      )}
    </>
  );
};

export default DeleteProduct;
