import React from 'react'
import Navbar from '../Components/Dashboard/Navbar/Navbar.jsx';
import Footer from '../Components/Dashboard/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
}
