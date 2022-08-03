import React from "react";
import { Link } from "react-router-dom";

import "./PodcastCard.css";    

function ResponseCard({response}){
    function parseResponse(){
        return {__html: response.content}
    }


    return (
        <div>
        <Link to={`/responses/fake`}>
        <h1>{response.title}</h1> 
        </Link>
           
        <div className="podcast">
            <p>ID: {response.response_id}</p>
            <p>SLUG: {response.slug}</p>
            <p>DATE : {response.date_created}</p>
            <p>featured_media: {response.featured_image}</p>
            <p>excerpt: {response.excerpt}</p>
            <p>reponds_to: {response.podcast_id}</p>
            <div>Content: <div dangerouslySetInnerHTML={parseResponse()}></div></div>
            
        </div>  
        </div>
        
    
    )
}

export default ResponseCard