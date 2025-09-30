import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import BlogHeader from './Components/BlogHeader'
import BlogHomepage from './Components/BlogHomepage'
import Blog from './Components/Blog'
import BlogCreate from './Components/BlogCreate'
import BlogLogin from './Components/BlogLogin'


function App() {

   
  return (
    <>
    <BlogHeader />
    <Routes>
      <Route path='/' element={<BlogHomepage />} />
      <Route path='/blog' element={<Blog />} /> 
      <Route path='/blogcreate' element={<BlogCreate />} />
      {/* <Route path='/listing' element={<BlogListing />} /> */}
      <Route path='/bloglogin' element={<BlogLogin />} />
    </Routes>
    </>
  )
}

export default App
