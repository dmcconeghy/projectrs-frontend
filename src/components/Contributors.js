import React, { useState, useEffect } from "react";
import ProjectrsApi from "../api";
import SearchForm from "./SearchForm";
import ContributorCard from "./ContributorCard";
import LoadingSpinner from "./LoadingSpinner";

function Contributors(){
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        search();
    }, []);

    async function search(){
        const response = await ProjectrsApi.getContributors();
        // console.log("response:", response)
        setContributors(response);
        
    }

    // console.log("podcasts: ", podcasts)

    const contributorCards = contributors.map(person => <ContributorCard key={person.contributor_id} contributor={person} />);
    console.log("contributorCards: ", contributorCards)
    
    if (!contributors) return <LoadingSpinner />;

    return (
        <>
        <h1>Temporary Podcasts Component</h1>
        <SearchForm search={search}/>
        {contributorCards}
      
        </>
    )
}

export default Contributors