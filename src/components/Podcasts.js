import React, { useState, useEffect } from "react";
import ProjectrsApi from "../api";
import SearchForm from "./SearchForm";
import PodcastCard from "./PodcastCard";

import "./Podcasts.css";    

function Podcasts(){
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        search();
    }, []);

    async function search(){
        const response = await ProjectrsApi.getPodcasts();
        // console.log("response:", response)
        setPodcasts(response);
        
    }

   

    // console.log("podcasts: ", podcasts)

    const podcastCards = podcasts.map(episode => <PodcastCard key={episode.id} episode={episode} />);
    console.log("podcastCards: ", podcastCards)
        
    return (
        <>
        <h1>Temporary Podcasts Component</h1>
        <SearchForm search={search}/>
        {podcastCards}
      
        </>
    )
}

export default Podcasts