import React from 'react';
import { NavLink } from 'react-router-dom';

import "./NavBar.css";

function NavBar() {
    
    return (
        <div className="header">
            <div className="header-content">
                <span className="RSP"><NavLink to="/">RSP</NavLink></span>
                <nav className="navbar">
                    <div className="navlinks">
                        <NavLink to="/resources" className="nav-link" id="resources">Resources</NavLink>
                        <NavLink to="/contributors" className="nav-link" id="contributors">Contributors</NavLink>
                        <NavLink to="/opportunities" className="nav-link" id="opportunities">Opportunities</NavLink>
                        <NavLink to="/about" className="nav-link" id="about">About</NavLink>
                        
                        {/* <NavLink to="/podcasts" className="nav-link">Podcasts</NavLink>
                        <NavLink to="/tags" className="nav-link">Tags</NavLink>
                        <NavLink to="/responses" className="nav-link">Responses</NavLink>
                        <NavLink to="/" className="nav-link">Home </NavLink> */}
                        
                    </div>
                    <div className="supportButton"><span className="supportRSP">Support the RSP</span></div>
                    
                    <div className="search">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#02161D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 21.0004L16.65 16.6504" stroke="#02161D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        SEARCH</div>
                </nav>
            </div>
        </div>    
    );
}

export default NavBar;