import React from 'react'
import useCustomHook from './useCustomHook'

const Custom1 = () => {
   let [data, error]= useCustomHook('https://jsonplaceholder.typicode.com/posts');
   let[data1, error1]= useCustomHook('https://fakestoreapi.com/products');
   console.log('post data',data, 'message',error);
   console.log('product data',data1, 'message',error1);
  return (
    <div>Custom1</div>
  )
}

export default Custom1