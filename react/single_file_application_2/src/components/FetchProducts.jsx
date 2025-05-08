import React, { useEffect } from "react";
import axios from 'axios';
import '../styles/FetchProducts.css';
const FetchProducts = () => {
  let [products, setProducts] = React.useState([]);
  //fetching backend data with the help of fetch api
//   let fetchData = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => setProducts(json)) //adding products to state
//       .catch((err) => console.log(err));
//   };
// fetching  data with the help of axios

let fetchData=()=>{
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>setProducts(res.data))
      .catch((err)=>console.log(err));
}
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        {
          products.map(
            (product)=>{
              return(
                <div className="card" key={product.id}>
                  <img src={product.image}  alt={product.title} />
                  <h3>{product.title.slice(0,15)}</h3>
                  <p className="price">${product.price}</p>
                  <p className="category">{product.category}</p>

                </div>
              )
              
            }
          )  
        }
      </div>
    </>
  );
};

export default FetchProducts;