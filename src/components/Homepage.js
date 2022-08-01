import React from "react";

import "./Homepage.css";

function Homepage (){
    return (
      
        <div className="home-content">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/podcasts">Podcasts</a></li>
                <li><a href="/tags">Tags</a></li>
                <li><a href="/responses">Responses</a></li>
                <li><a href="/contributors">Contributors</a></li>
            </ul>
        </div>
       
        
    )
}

export default Homepage;