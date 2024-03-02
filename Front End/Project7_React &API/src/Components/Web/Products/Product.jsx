import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

export default function Product() {
    const {productId}=useParams(); // should be same name in APP.jsx  >>>>   path:'/products/category/:productId'
    console.log(productId);

    const getProduct=async ()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
        console.log(data.product);
        return data.product;
  

    };
const {data,isLoading}=useQuery('product_details',getProduct);
console.log(data);

if(isLoading){
    return (<p>Loading product details .......... </p>)
}

  return (
    <div className='product'>
        <h2>{data.name}</h2>

        </div>
   
  )
}