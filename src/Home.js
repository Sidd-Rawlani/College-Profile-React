import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Tech from './components/Tech/Tech'

const Home = () => {
  return (
    <div>
        <Navbar />
        <About />
        <Tech />
        <Footer />
    </div>
  )
}

export default Home