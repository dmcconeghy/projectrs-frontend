import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ProjectrsApi from "../api";
import TagCard from "./TagCard";

// import "./EpisodeDetails.css";

function TagDetails() {
    const { slug_or_id } = useParams();
    const [tag, setTag] = React.useState(null);

    useEffect(() => {
        async function getTag() {
            setTag(await ProjectrsApi.getTag(slug_or_id));
        }

        getTag();
        }, [slug_or_id]);

        
        if (!tag) return <LoadingSpinner />;

        return (
            <main className="tagDetails">       
                
                <TagCard key={tag.id} tag={tag} />
    
                <div className="tag-episodes">APPEARS IN PODCASTS</div>
           
            </main>
        )
}

export default TagDetails;