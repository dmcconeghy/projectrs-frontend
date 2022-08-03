import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectrsApi from "../api";
import LoadingSpinner from "./LoadingSpinner";   

function TagCard({ tag }){
    
    const [tags, setTags] = useState([]);

    useEffect(() => {
        async function getPodcasts(){
            setTags(await ProjectrsApi.getTag(tag));
    
         }
        getPodcasts();
    }, [tag]);
    
     if (!tags) return <LoadingSpinner />;
    
    return (
        <div>
        <Link to={`/tags/${tag.tag_id}`}>
        <h4>{tag.name} ({tag.count}) </h4> 
        </Link>
           <p>Future list of links to use?</p>
        </div>
        
    
    )
}

export default TagCard