import React from 'react';
import { NavLink } from 'react-router-dom';

import "./NavBar.css";

function NavBar() {
    
    return (
        
        <nav className='navbar'>
            <NavLink to="/podcasts" className="nav-link">Podcasts</NavLink>
            <NavLink to="/tags" className="nav-link">Tags</NavLink>
            <NavLink to="/" className="nav-link">Home </NavLink>
        </nav>    
    );
}

export default NavBar;