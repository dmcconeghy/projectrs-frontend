import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ProjectrsApi from "../api";
import PodcastCard from "./PodcastCard";

import "./EpisodeDetails.css";

function EpisodeDetails() {
    const { slug_or_id } = useParams();
    const [episode, setEpisode] = React.useState(null);

    useEffect(() => {
        async function getPodcast() {
            setEpisode(await ProjectrsApi.getPodcast(slug_or_id));
        }

        getPodcast();
        }, [slug_or_id]);
        
        if (!episode) return <LoadingSpinner />;

        let podcastCard = <PodcastCard key={episode.id} episode={episode}/>

        return (
            <main className="episodeDetails">       
                
                {podcastCard}

                <div className="episode-Contributors">CONTRIBUTOR COMPONENT</div>
                <div className="episode-Video">VIDEO COMPONENT</div>
                <div className="episode-Transcript">TRANSCRIPT COMPONENT</div>
                <div className="episode-Responses">RESPONSES COMPONENT</div>
                  
            </main>
        )
}

export default EpisodeDetails;