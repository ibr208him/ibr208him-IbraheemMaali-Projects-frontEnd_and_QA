import React, { useEffect, useState } from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import Home from './Components/Web/Home/Home.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Categories from './Components/Web/Categories/Categories.jsx';
import Layout from './Layouts/Layout';
import Products from './Components/Web/Products/Product';
import Register from './Components/Web/Register/Register';
import Login from './Components/Web/LogIn/Login.jsx';
import Categoriesdashboard from './Components/Dashboard/Categories/Categories';// we can give any name to export default 
import Homedashboard from './Components/Dashboard/Home/Home';// we can give any name to export default 
import { jwtDecode } from "jwt-decode";
import CategoryDetails from './Components/Web/Categories/CategoryDetails.jsx';
import Product from './Components/Web/Products/Product';


export default function App() {

  const [user,setUser]=useState(null);
  const saveCurrentUser=()=>{
    const token=localStorage.getItem('userToken');
     if(token){
    const decoded = jwtDecode(token);
    setUser(decoded);
    console.log(user);
    console.log(decoded);
     }
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} setUser={setUser}/>,
    //   errorElement:<h2>page not found ....web</h2>,
      children:[
        {
        path:'home', // or index:true,
        element:<Home/>,
        },
        {
          path:'categories',
          element:<Categories/>,
          },
          {
            path:'/products/category/:categoryId',
            element:<CategoryDetails/>,
            },
            {
              path:'product/:productId',
              element:<Product/>,
              },
          {
            path:'products',
            element:<Products/>,
            },
            {
              path:'register',
              element:<Register/>,
              },
              {
              path:'login',
              element:<Login saveCurrentUser={saveCurrentUser}/>,
              },
          {
            path:'*', 
            element:<h2>page not found ...web</h2>
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout/>,
    //   errorElement:<h2>page not found ....dashboard</h2>,
  
      children:[
        {
             path:'categories',
             element:<Categoriesdashboard/>,
        },
        {
             path:'home',
             element:<Homedashboard/>,
        },
        {
            path:'*', 
            element:<h2>page not found ...dashboard</h2>
        },
      ]
    },
  
    // {
    //     path:'/*', 
    //     element:<h2>page not found ...web</h2>
    // },
    // {
    //     path:'/dashboard/*',
    //     element:<h2>page not found ...dashboard</h2>
    // }
  
  
  ]);
useEffect(()=>{
  saveCurrentUser(); // when we make refresh , the user value is null so we don't want that
},[]);
  return (
    <RouterProvider router={router} />
  )
}
