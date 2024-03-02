import React from 'react'
import Navbar from '../Components/Web/Navbar/Navbar.jsx'
import Footer from '../Components/Web/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
export default function Layout({user,setUser}) {
  return (
   <>
   <Navbar user={user} setUser={setUser}/>
   <Outlet/>
   <Footer/>
   </>
  )
}