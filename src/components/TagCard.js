import React from "react";
import { Link } from "react-router-dom";
 
function TagCard({ tag }){
    
    return (
        <div>
            <Link to={`/tags/${tag.slug}`}>
            <h4>#{tag.name} ({tag.count}) </h4> 
            </Link>
           
        </div>
        
    
    )
}

export default TagCard