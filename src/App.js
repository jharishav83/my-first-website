import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import './App.css';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Service from './Service';
import Navbar from "./Navbar";
import Footer  from './Footer';



function App() {
  return (
    <>
    <Navbar/>
  
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/> 
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/service" element={<Service/>}/>
   <Route path="*" element={<Error/>}/>
</Routes>

         <Footer/>
   </>
  );
}

export default App;
