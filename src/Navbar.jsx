import React from 'react'
import "./App.css";
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Rishav's Website</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav ml-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact to="/" className="nav-link active" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact to="/about" className="nav-link" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact to="/service" className="nav-link" >Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact to="/contact"className="nav-link" >Contact</NavLink>
        </li>
       
      
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
