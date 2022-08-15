import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectrsApi from "../api";
// import SearchForm from "./SearchForm";
import TagCard from "./TagCard";
import LoadingSpinner from "./LoadingSpinner";

function Tags() {
    const search = useLocation().search;
  
    const name  = new URLSearchParams(search).get('name') || "";
    const page = parseInt(new URLSearchParams(search).get('page')) || 1;
    const limit = new URLSearchParams(search).get('limit') || 10;

    const [pages, setPages] = useState(0);
    const [total, setTotal] = useState(0);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        getTags();
    }, []);

    async function getTags(){
        const response = await ProjectrsApi.getTags(
            {"name": name,
            "page": page,
            "limit": limit});
         
        setTags(response.page_results);
        setPages(response.total_pages);
        setTotal(response.total_results);
    }

    const tagCards = tags.map(tag => <TagCard key={tag.id} tag={tag} />);
    

    if (!tags) return <LoadingSpinner />;

    return (
        <>
            <div className="tagsList">
                <p>Returning {tags.length} podcasts | Page {page} of {pages} | Total Results {total}</p>
                <p>Links: <a href={`/tags/?name=${name}&page=${page - 1 < 1 ? 1 : page - 1}&limit=${limit}`}>previous</a> |
                 <a href={`/tags/?name=${name}&page=${page + 1 > pages ? page + 1: page + 1}&limit=${limit}`}>next</a></p>
                {tagCards}
            </div>
        </>
    )
}


export default Tags;