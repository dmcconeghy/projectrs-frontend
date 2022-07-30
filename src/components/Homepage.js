import React from "react";

import "./Homepage.css";

function Homepage (){
    return (
        <div className="home-body">
            <div className="breadcrumbBox">
                <div className="breadcrumbs">Home &gt; Resources &gt; Sample</div>
                {/* NOTE: BreadcrumbBox currently set to order 0 since home-body intecepts 0-1 associated with header box. 
                    This also means "home-content below has a order of 1 rather than 2*/}
            </div>
            <div className="home-content">
                <h1>Project RS</h1>
                <p><a href="/">Home</a></p>
                <p><a href="/podcasts">Podcasts</a></p>
                <p><a href="/tags">Tags</a></p>
                <p><a href="/responses">Responses</a></p>
                <p><a href="/contributors">Contributors</a></p>
            </div>
       
        </div>
    )
}

export default Homepage;