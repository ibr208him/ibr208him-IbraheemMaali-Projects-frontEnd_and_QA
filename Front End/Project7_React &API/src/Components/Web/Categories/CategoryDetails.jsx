import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'

export default function CategoryDetails() {
    const {categoryId}=useParams(); // should be same name in APP.jsx  >>>>   path:'/products/category/:categoryId'
    console.log(categoryId);

    const getCategoryDetails=async ()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`);
        console.log(data.products);
        return data.products;
        

    };
const {data,isLoading}=useQuery('category_details',getCategoryDetails);
console.log(data);

if(isLoading){
    return <p>Loading category details .......... </p>
}

  return (
    <div className='products'>
    {
    data.length?data.map((product)=>{
        return (
        <div className='product' key={product._id}>
            <img src={product.mainImage.secure_url} alt='product image' />
            <h2>{product.name}</h2>
            <Link to={`/product/${product._id}`}>click to get the product details</Link>
        </div>
    )    
    })
    :
    <h2>no product ...!!!</h2>

}

    </div>
   
  )
}
