import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectrsApi from "../api";
import SearchForm from "./SearchForm";
import PodcastCard from "./PodcastCard";
import LoadingSpinner from "./LoadingSpinner";

import "./Podcasts.css";    

function Podcasts(){
    const search = useLocation().search;
    const [podcasts, setPodcasts] = useState([]);
    const title  = new URLSearchParams(search).get('title') || "";
    const content = new URLSearchParams(search).get('content') || "";
    const page = new URLSearchParams(search).get('page') || 1;
    const limit = new URLSearchParams(search).get('limit') || 10;
    const [pages, setPages] = useState(0);
    const [total, setTotal] = useState(0);

    
    
    useEffect(() => {
        getPodcasts();
    }, []);

    async function getPodcasts(){
        const response = await ProjectrsApi.getPodcasts({"title": title, "content": content, "page": page, "limit": limit});
        
        setPodcasts(response.page_results);
        setPages(response.total_pages);
        setTotal(response.total_results);
        
    }
    
    const podcastCards = podcasts.map(episode => <PodcastCard key={episode.podcast_id} episode={episode} />);
    
    if (!podcasts) return <LoadingSpinner />;

    return (
        <>
            {/* <SearchForm search={getPodcasts}/> */}
            
            <div className="podcastsList">
            <p>Returning {podcasts.length} podcasts | Page {page} of {pages} | Total Results {total}</p>
            <p>Links: <a href={`/podcasts/?title=${title}&content=${content}&page=${page - 1 < 1 ? 1 : page - 1}&limit=${limit}`}>previous</a> | <a href={`/podcasts/?title=${title}&content=${content}&page=${page + 1 > pages ? pages : page + 1 }&limit=${limit}`}>next</a></p>
                {podcastCards}
            </div>
        </>
    )
}

export default Podcasts