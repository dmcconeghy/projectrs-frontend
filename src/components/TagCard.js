import React from "react";
import { Link } from "react-router-dom";   

function TagCard({tag}){

    return (
        <div>
        <Link to={`/tags/fake`}>
        <h1>{tag.name}</h1> 
        </Link>
           
        <div className="tag">
            <p>ID: {tag.id}</p>
            <p>Count: {tag.count}</p>
            <p>Page Link: {tag.url}</p>
        </div>  
        </div>
        
    
    )
}

export default TagCard