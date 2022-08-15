import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectrsApi from "../api";
import SearchForm from "./SearchForm";
import ResponseCard from "./ResponseCard";
import LoadingSpinner from "./LoadingSpinner";

import "./Podcasts.css";    

function Responses(){
    const [responses, setResponses] = useState([]);
    const [pages, setPages] = useState(0);
    const [total, setTotal] = useState(0);

    const search = useLocation().search;

    const title  = new URLSearchParams(search).get('title') || "";
    const content = new URLSearchParams(search).get('content') || "";
    const contributors = new URLSearchParams(search).get('contributors') || "";
    const page = parseInt(new URLSearchParams(search).get('page')) || 1;
    const limit = new URLSearchParams(search).get('limit') || 10;

    useEffect(() => {
        getResponses();
    }, []);

    async function getResponses(){
        const result = await ProjectrsApi.getResponses(
            {"title": title, 
            "content": content,
            "contributors": contributors, 
            "page": page, 
            "limit": limit});

        setResponses(result.page_results);
        setPages(result.total_pages);
        setTotal(result.total_results);

    }

    const responseCards = responses.map(response => 
        <ResponseCard key={response.id} response={response} />);
    
    
    if (!responses) return <LoadingSpinner />;

    return (
        <>
            <div className="responsesList">
                <p>Returning {responses.length} podcasts | Page {page} of {pages} | Total Results {total}</p>
                <p>Links: <a href={`/podcasts/?title=${title}&content=${content}&contributors=${contributors}&page=${page - 1 < 1 ? 1 : page - 1}&limit=${limit}`}>previous</a> |
                    <a href={`/podcasts/?title=${title}&content=${content}&contributors=${contributors}&page=${page + 1 > pages ? page + 1: page + 1 }&limit=${limit}`}>next</a></p>
                    
            <SearchForm search={search}/>
            {responseCards}
        </div>
        
            
      
        </>
    )
}

export default Responses