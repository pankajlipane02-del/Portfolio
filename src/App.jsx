import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './component/Navbar'
import Home from './component/Home'
import AboutUs from './component/AboutUs'
import Services from './component/Services'
import Skill from './component/Skill'
import Pricing from './component/Pricing'
import Testimonial from './component/Testimonial'
import Work from './component/Work'
import Contact from './component/Contact'

import ChatBot from './component/ChatBot' // 👈 ADD THIS

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/skill' element={<Skill/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

      {/* 🔥 GLOBAL CHATBOT (ALL pages) */}
      <ChatBot />

    </BrowserRouter>
  )
}

export default App