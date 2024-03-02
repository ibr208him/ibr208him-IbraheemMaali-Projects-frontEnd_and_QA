import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './categories.css';
import 'swiper/css';
import { Link } from 'react-router-dom';

export default function Categories() {

// //console.log(import.meta.env.VITE_API_URL);
//   const [allCategroies,setAllCategories] = useState([]);
//   const [isLoading,setIsLoading] = useState(true);
//   const getAllCategories=async ()=>{
//     try{
//   const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
//   console.log(data);
//   setAllCategories(data.categories);
//   // setIsLoading(false);
//     }
//     catch (error) {
//       console.log(error);
//       // setIsLoading(false);

//     }
//     finally {
//       setIsLoading(false);
//     }
//   }

//   useEffect(() =>{
//     getAllCategories();
//   },[]);

//   if(isLoading) {
//     return <h2 className='m-5'> loading ......... </h2>
//   }
  // else{
 
 
  const getAllCategories=async ()=>{
    
   const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/categories`); 
   return data;
  }
  const {data,isLoading}=useQuery('web-categories',getAllCategories);
  console.log(isLoading);
  console.log(data?.categories); // use with object, it is not turnery operator> it means if the object data has data, get the property categories
if(isLoading){
  return <h2> Loading ...............</h2>
}
  return (
    <div className='container'>
    
        {/* {

allCategroies.length?allCategroies.map((category)=>{
         return(
         <div className='col-md-4' key={category._id}>
         <h2>{category.name}</h2>
         <img src={category.image.secure_url} alt="category image" />
         </div>)
         })
         :
         <h2> no category found</h2>

        } */}
         
       {/* {
         data?.categories.length ? data?.categories.map((category)=>{     // use with object, it is not turnery operator> it means if the object data has data, get the property categories
         return(
         <div className='col-md-4' key={category._id}>
         <h2>{category.name}</h2>
         <img src={category.image.secure_url} alt="category image" />
         </div>)
         })
         :
         <h2> no category found</h2>

        }  */}


<div className="swiper-custom-pagination mt-5"></div> 
<Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      slidesPerView={6.3}
      navigation
      pagination={{
        clickable: true,
         el:".swiper-custom-pagination"
       }}
       scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
       autoplay={{delay:1000,}}
       loop={true}
    >
          
{
data?.categories.length ? data?.categories.map((category)=>{
return(
      <SwiperSlide key={category._id}>
        <Link to={`/products/category/${category._id}`}>
     <div className='categotry'>
      <img src={category.image.secure_url} alt="category image" className='rounded-circle ratio ratio-21x9'/>
      <h2>{category.name}</h2>
      </div>
      </Link>
      </SwiperSlide>
     )

})
:
<h2> no category found</h2>
}
    </Swiper>
  
    </div>

  )
// }
}