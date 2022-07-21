import React, { useState, useEffect } from "react";
import ProjectrsApi from "../api";
import SearchForm from "./SearchForm";
import TagCard from "./TagCard";
import LoadingSpinner from "./LoadingSpinner";

function Tags(){
    const [tags, setTags] = useState([]);

    useEffect(() => {
        search();
    }, []);

    async function search(){
        const response = await ProjectrsApi.getTags();
        // console.log("response:", response)
        setTags(response);      
    }

    const tagCards = tags.map(tag => <TagCard key={tag.id} tag={tag} />);
    
    console.log("tags: ", tags)

    if (!tags) return <LoadingSpinner />;

    return (
        <>
        <h1>Temporary Podcasts Component</h1>
        {/* <SearchForm search={search}/> */}
        {tagCards}
      
        </>
    )
}


export default Tags;