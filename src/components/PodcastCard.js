import React from "react";
import { Link } from "react-router-dom";

import "./PodcastCard.css";    

function PodcastCard({episode}){

    return (
        <div>
        <Link to={`/podcasts/fake`}>
        <h1>{episode.title}</h1> 
        </Link>
           
        <div className="podcast">
            <p>ID: {episode.id}</p>
            <p>Audio Link: {episode.url}</p>
        </div>  
        </div>
        
    
    )
}

export default PodcastCard