import React from 'react'
import Index from './components/Users/Index.jsx'
import Create from './components/Users/Create.jsx'
import {Routes,Route} from 'react-router-dom'
import Details from './components/Details/Details.jsx'
import Edit from './components/Users/Edit.jsx'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/user/index' element={<Index/>}/>
        <Route path='/user/create' element={<Create/>}/>
        <Route path='*' element={<h2>page not found</h2>}/>
        <Route path='/user/:id' element={<Details/>}/>  {/* :id is a variable */}
        <Route path='/user/edit/:id' element={<Edit/>}/>  {/* :id is a variable */}
    </Routes>
  )
}
