import React from 'react'
import Contact from './Contact'
import About from './About.jsx'
import Feedback from './Feedback'
import Home from './Home'
import { Routes, Route, Link } from 'react-router-dom' 
import './App.css';
import NotFound from './NotFound.jsx'

export default function App() {
  return (
    <>
      
   
    {/* <h1>This is my main page</h1> */}
     <div className='main'>
    <div className='navbar'>
      <Link to='/'>Home</Link>
     
    <Link to='contact'>contact us</Link>
     <Link to='about'>about</Link>
      <Link to='feedback'>feedback</Link>
   </div>
   </div>
    {/* <Contact/>
    <About/>
    <Feedback/> */}
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/about" element={<About/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </>
  )
}
