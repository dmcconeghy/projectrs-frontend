import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectrsApi from "../api";
import SearchForm from "./SearchForm";
import PodcastCard from "./PodcastCard";
import LoadingSpinner from "./LoadingSpinner";

import "./Podcasts.css";    

function Podcasts(){
    const [podcasts, setPodcasts] = useState([]);
    
    useEffect(() => {
        search();
    }, []);

    async function search(){
        const response = await ProjectrsApi.getPodcasts();
        // console.log("Sample podcast:", response[0])
        console.log("podcasts:", response)
        setPodcasts(response);
        
    }

    const podcastCards = podcasts.map(episode => <PodcastCard key={episode.podcast_id} episode={episode} />);
    
    if (!podcasts) return <LoadingSpinner />;

    return (
        <>
            <h1>Temporary Podcasts Component</h1>
            <SearchForm search={search}/>
            {podcastCards}
      
        </>
    )
}

export default Podcasts