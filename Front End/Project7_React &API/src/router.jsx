// import React from 'react';
// import Layout from './Layouts/Layout';
// import DashboardLayout from './Layouts/DashboardLayout';
// import Home from './Components/Web/Home/Home.jsx';
//  import Homedashboard from './Components/Dashboard/Home/Home';// we can give any name to export default 
// import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// import Categories from './Components/Web/Categories/Categories.jsx';
//  import Categoriesdashboard from './Components/Dashboard/Categories/Categories';// we can give any name to export default 
// import Products from './Components/Web/Products/Products';
// import Register from './Components/Web/Register/Register.jsx';
// import Login from './Components/Web/LogIn/Login.jsx';

//  const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout/>,
//     //   errorElement:<h2>page not found ....web</h2>,
//       children:[
//         {
//         path:'home',
//         element:<Home/>,
//         },
//         {
//           path:'categories',
//           element:<Categories/>,
//           },
//           {
//             path:'products',
//             element:<Products/>,
//             },
//             {
//               path:'register',
//               element:<Register/>,
//               },
//               {
//               path:'login',
//               element:<Login/>,
//               },
//           {
//             path:'*', 
//             element:<h2>page not found ...web</h2>
//         },
//       ],
//     },
//     {
//       path: "/dashboard",
//       element: <DashboardLayout/>,
//     //   errorElement:<h2>page not found ....dashboard</h2>,

//       children:[
//         {
//              path:'categories',
//              element:<Categoriesdashboard/>,
//         },
//         {
//              path:'home',
//              element:<Homedashboard/>,
//         },
//         {
//             path:'*', 
//             element:<h2>page not found ...dashboard</h2>
//         },
//       ]
//     },

//     // {
//     //     path:'/*', 
//     //     element:<h2>page not found ...web</h2>
//     // },
//     // {
//     //     path:'/dashboard/*',
//     //     element:<h2>page not found ...dashboard</h2>
//     // }
  
  
//   ]);

//   export default router;