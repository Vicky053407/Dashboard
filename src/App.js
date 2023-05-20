import React from 'react'
import Sidenav from './Components/Sidenav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Settings from './Components/Settings'
import About from './Components/About'

export default function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/> 
        <Route path='/settings' exact element={<Settings/>}/> 
        <Route path='/about' exact element={<About/>}/> 
      </Routes>
    </Router>
   </>
  )
}
 