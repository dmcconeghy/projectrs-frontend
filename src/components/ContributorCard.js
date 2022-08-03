import React from "react";
import { Link } from "react-router-dom";    

function ContributorCard({contributor}){
    function parseBio(){
        return {__html: contributor.bio_text}
    }

    return (
        <div className="contributorCard">
            <Link to={`/contributors/${contributor.slug}`}>
            <h1>{contributor.name}</h1> 
            </Link>
            
            <div className="contributor">
                <p>ID: {contributor.contributor_id}</p>
                <p>SLUG: {contributor.slug}</p>
                <div>Bio: <div dangerouslySetInnerHTML={parseBio()}></div></div>
                <p>Media: {contributor.profile_image}</p>
            </div>  
        </div>
        
    
    )
}

export default ContributorCard