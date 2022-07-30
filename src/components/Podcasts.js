import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProjectrsApi from "../api";
import SearchForm from "./SearchForm";
import PodcastCard from "./PodcastCard";
import LoadingSpinner from "./LoadingSpinner";

import "./Podcasts.css";    

function Podcasts(){
    const [podcasts, setPodcasts] = useState([]);
    const [searchParams] = useSearchParams();
    
    // console.log(searchParams)
    
    useEffect(() => {
        search();
    }, []);

    async function search(input){
        const response = await ProjectrsApi.getPodcasts( searchParams.get("title"), searchParams.get("page"), searchParams.get("limit") );
        // console.log("response:", response)
        setPodcasts(response);
        
    }

    // console.log("podcasts: ", podcasts)

    const podcastCards = podcasts.map(episode => <PodcastCard key={episode.id} episode={episode} />);
    // console.log("podcastCards: ", podcastCards)
    
    if (!podcasts) return <LoadingSpinner />;

    return (
        <main>
            <h1>Temporary Podcasts Component</h1>
            <SearchForm search={search}/>
            {podcastCards}
      
        </main>
    )
}

export default Podcasts