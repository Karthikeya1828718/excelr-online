import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../users/ProductsSlice';

const ProductList = () => {
    let dispatch=useDispatch();
    let {products,status,error}=  useSelector((state) => state.products)
  return (
    <div>
        <button onClick={()=>dispatch(fetchProducts())}>click me to get </button>

        <h2>Product List</h2>
        {status==='loading' && <div>Loading...</div>}
        {status==='failed' && <div style={{color:'red'}}>{error}</div>}
        <ul>
            {products.map((product)=><li key={product.id}>{product.title}</li>)}
        </ul>
    </div>
  )
}

export default ProductList