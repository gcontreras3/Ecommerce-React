import './App.css'
import Home from './components/Home'
import Navbar from './components/Nav'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'
import React from 'react'



function App() {
  return (
    <div className="App">
      <div>
        <header>
          <h1>Ecommerce Store</h1>
          <Navbar />
        </header>
        <React.Fragment>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/Products" element={<Products/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          </Routes >
        </React.Fragment>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
