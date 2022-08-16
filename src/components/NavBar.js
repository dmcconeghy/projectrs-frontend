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
                        <div className="dropdown">
                        <NavLink to="/resources" className="nav-link " id="resources">
                        Resources
                        <div className="resources-chevron-wrapper">
                            <div className="resources-chevron">
                            <svg  width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.875 12.5706L7.125 6.99916L1.875 1.42773" stroke="#02161D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            </div>
                        </div>
                        </NavLink>
                        <div className="dropdown-content">
                           <p><NavLink to="/podcasts" className="nav-link" id="podcasts">Podcasts</NavLink></p>
                           <p><NavLink to="/responses" className="nav-link" id="responses">Responses</NavLink></p>
                           <p><NavLink to="/playlists" className="nav-link" id="playlists">Playlists</NavLink></p>
                        </div>
                    </div>
                        <NavLink to="/contributors" className="nav-link" id="contributors">Contributors</NavLink>
                        <NavLink to="/opportunities" className="nav-link" id="opportunities">Opportunities</NavLink>
                        <NavLink to="/about" className="nav-link" id="about">About</NavLink>
                        
                        {/* <NavLink to="/podcasts" className="nav-link">Podcasts</NavLink>
                        <NavLink to="/tags" className="nav-link">Tags</NavLink>
                        <NavLink to="/responses" className="nav-link">Responses</NavLink>
                        <NavLink to="/" className="nav-link">Home </NavLink> */}
                        
                    </div>

                    {window.location.pathname === "/" ? <div className="darkSupportButton"><NavLink to="/support" className="darkSupportRSP">Support the RSP</NavLink></div> :
                    <div className="supportButton"><NavLink to="/support" className="supportRSP">Support the RSP</NavLink></div>}
                    
                    
                    <div className="search">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#02161D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 21.0004L16.65 16.6504" stroke="#02161D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Search</div>
                </nav>
            </div>
        </div>    
    );
}

export default NavBar;