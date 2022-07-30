import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ProjectrsApi from "../api";
import PodcastCard from "./PodcastCard";

import "./EpisodeDetails.css";

function EpisodeDetails() {
    const { slug } = useParams();
    const [episode, setEpisode] = React.useState(null);

    useEffect(() => {
        async function getPodcast() {
            setEpisode(await ProjectrsApi.getPodcast(slug));
        }
        getPodcast();
        }, [slug]);
        
        if (!episode) return <LoadingSpinner />;

        let podcastCard = <PodcastCard key={episode.id} episode={episode} />

        return (
            <main>
                <div className="breadcrumbBox">
                    <div className="breadcrumbs">Home &gt; Resources &gt; Sample</div>
                    {/* NOTE: BreadcrumbBox currently set to order 0 since home-body intecepts 0-1 associated with header box. 
                        This also means "home-content below has a order of 1 rather than 2*/}
                </div>
                
                {podcastCard}
                
                <div className="episode-Contibutors">CONTRIBUTOR COMPONENT</div>
                <div className="episode-Video">VIDEO COMPONENT</div>
                <div className="episode-Transcript">TRANSCRIPT COMPONENT</div>
                <div className="episode-Responses">RESPONSES COMPONENT</div>
           
          
            </main>
        )
}

export default EpisodeDetails;