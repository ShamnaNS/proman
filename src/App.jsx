import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <h1>Welcome to ProMan App</h1>
    <Navbar/>
    <br>
      </br>
      <Routes>

      <Route path='/'element={<Home/>}></Route>
    
    <Route path='/add' element={<Add item={{
      title:'Mobile Pone',
      description:'Iphone 15 pro max',
      price:'1,49,999',
      category:''
      }}/>}></Route>

      </Routes>
      </>
    
  
    
  
  )
}

export default App