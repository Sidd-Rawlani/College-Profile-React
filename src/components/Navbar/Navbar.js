//import React, {Component} from 'react';
import Toggle from '../toggle/Toggle';
import './Navbar.css';
import { BrowserRouter,Routes,Route,Link,Outlet } from 'react-router-dom';
import Education from '../Education/Education';
import Card from '../Card/Card';
const Navbar = () =>{
    
    return(
        
        <div>
            <nav className="navbar"  >
            <div className='Brand-title'> Portfolio </div>
            <Toggle />
                <a href="#" className="nav-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className='nav-links'>
                    <ul>
                       
                        <li > <a  className="links"> <Link to='/' >Home</Link> </a></li>
                        <li > <a  className="links"> <Link to='/projects' >Projects</Link> </a></li>
                        <li > <a  className="links"> <Link to='/contact' >Contact</Link> </a></li>
                        <li>  <a  className="links"><Link to='/education'> Education  </Link></a></li> 
                       
                    
                    </ul>
               
               
               <Outlet />
               
                </div>
            
            
            </nav>
        </div>
        
       
    );



}

export default Navbar;