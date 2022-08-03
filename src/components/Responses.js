import React, { useState, useEffect } from "react";
import ProjectrsApi from "../api";
import SearchForm from "./SearchForm";
import ResponseCard from "./ResponseCard";
import LoadingSpinner from "./LoadingSpinner";

import "./Podcasts.css";    

function Responses(){
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        search();
    }, []);

    async function search(){
        const result = await ProjectrsApi.getResponses();
        console.log("Sample response:", result)
        setResponses(result);
        
    }

    // console.log("podcasts: ", podcasts)

    const responseCards = responses.map(response => <ResponseCard key={response.id} response={response} />);
    // console.log("responseCards: ", responseCards)
    
    if (!responses) return <LoadingSpinner />;

    return (
        <>
        <h1>Temporary Podcasts Component</h1>
        <SearchForm search={search}/>
        {responseCards}
      
        </>
    )
}

export default Responses