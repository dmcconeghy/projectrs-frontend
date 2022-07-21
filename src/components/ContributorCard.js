import React from "react";
import { Link } from "react-router-dom";    

function ContributorCard({contributor}){
    function parseBio(){
        return {__html: contributor.bio}
    }

    return (
        <div>
        <Link to={`/contributors/fake`}>
        <h1>{contributor.name}</h1> 
        </Link>
           
        <div className="podcast">
            <p>ID: {contributor.id}</p>
            <div>Bio: <div dangerouslySetInnerHTML={parseBio()}></div></div>
            <p>Media: {contributor.featured_media}</p>
        </div>  
        </div>
        
    
    )
}

export default ContributorCard