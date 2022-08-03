import React from "react";

import "./Homepage.css";

function Homepage (){
    return (
        <div className="homepage">

            <p>Helpful links for production</p>
            
             <div className="home-content">           
                <span><a href="/">Home</a></span>
                <span><a href="/podcasts">Podcasts</a></span>
                <span><a href="/tags">Tags</a></span>
                <span><a href="/responses">Responses</a></span>
                <span><a href="/contributors">Contributors</a></span>
            </div>

            <div>HERO CONTENT</div>
            <div>FEATURED RESOURCES</div>
            <div>ABOUT the RSP</div>
            <div>RECENTLY ADDED RESOURCES</div>
            <div>POPULAR TAGS</div>
            <div>CONTRIBUTORS</div>
            <div>RECENT FIRST-TIME CONTRIBUTORS</div>
            <div>SPONSORS</div>

        </div>
      
       
       
        
    )
}

export default Homepage;