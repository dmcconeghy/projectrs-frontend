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
            <p>ID: {response.id}</p>
            <p>URL : {response.url}</p>
            <p>featured_media: {response.featured_media}</p>
            <p>contributor: {response.contributor}</p>
            <p>reponds_to: {response.reponds_to}</p>
            <div>Content: <div dangerouslySetInnerHTML={parseResponse()}></div></div>
            
        </div>  
        </div>
        
    
    )
}

export default ResponseCard