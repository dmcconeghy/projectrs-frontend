import React from "react";

import "./Homepage.css";

function Homepage (){
    return (
        <div className="home-body">
            <h1>Project RS</h1>
            <p><a href="/">Home</a></p>
            <p><a href="/podcasts">Podcasts</a></p>
            <p><a href="/tags">Tags</a></p>
            <p><a href="/responses">Responses</a></p>
            <p><a href="/contributors">Contributors</a></p>
       
        </div>
    )
}

export default Homepage;