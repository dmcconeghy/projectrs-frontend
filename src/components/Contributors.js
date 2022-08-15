import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectrsApi from "../api";
import ContributorCard from "./ContributorCard";
import LoadingSpinner from "./LoadingSpinner";

function Contributors(){
    const search = useLocation().search;

    const name  = new URLSearchParams(search).get('name') || "";
    const bio = new URLSearchParams(search).get('bio') || "";
    const page = parseInt(new URLSearchParams(search).get('page')) || 1;
    const limit = new URLSearchParams(search).get('limit') || 10;

    const [contributors, setContributors] = useState([]);
    const [pages, setPages] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getContributors();
    }, []);

    async function getContributors(){
        const response = await ProjectrsApi.getContributors(
            {"name": name, 
            "bio_text": bio, 
            "page": page, 
            "limit": limit});
        
        setContributors(response.page_results);
        setPages(response.total_pages);
        setTotal(response.total_results);
        
    }

    const contributorCards = contributors.map(person => 
        <ContributorCard key={person.contributor_id} contributor={person} />);
    
    if (!contributors) return <LoadingSpinner />;

    return (
        <>
        <div className="contributorsList">
            <p>Returning {contributors.length} podcasts | Page {page} of {pages} | Total Results {total}</p>
            <p>Links: <a href={`/podcasts/?name=${name}&bio=${bio}&page=${page - 1 < 1 ? 1 : page - 1}&limit=${limit}`}>previous</a> |
            <a href={`/podcasts/?name=${name}&bio=${bio}&page=${page + 1 > pages ? page + 1: page + 1}&limit=${limit}`}>next</a></p>     
            {contributorCards}
        </div>
      
        </>
    )
}

export default Contributors