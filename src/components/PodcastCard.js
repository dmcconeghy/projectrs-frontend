import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TagCard from "./TagCard";

import "./PodcastCard.css";    
import ProjectrsApi from "../api";

function PodcastCard({episode}){
    console.log(episode)
    // console.log(tags)
    const [tags, setTags] = useState([]);

    useEffect(() => {
        async function getTags(){
            const response = await ProjectrsApi.getTagsByPodcast(episode.podcast_id);
            // console.log("response:", response)
            setTags(response);
        }

        getTags();
    }, [episode.podcast_id]);

    


    function parsePodcast(){
        return {__html: episode.excerpt}
    }
    
    const podcastTags = [tags.map(tag => <TagCard key={tag.id} tag={tag} />)];

    return (
        <div className="podcastCard">
            
            <div className="podcastContent">

                <div className="podcastHeader">

                    <div className="headerContent">

                        <div className="podcastTitle">
                            <Link to={`/podcasts/${episode.slug}`}>
                                {episode.title}
                            </Link>
                        </div>
                        
                        <div className="podcastTags">
                            {podcastTags}
                        </div>

                        <div className="podcastMeta">
                            <div className="info">META INFORMATION</div>
                        </div>

                    </div>

                    <div className="podcastExcerpt">
                            <div dangerouslySetInnerHTML={parsePodcast()}></div>
                        </div>

                    <div className="keepReading">
                        <div className="keepLink">Continue Reading</div>
                    </div>
                </div>
                
            </div>
            <div className="podcastMedia">
                <div className="mediaContent">
                    <div className="featuredMedia">
                        <img src={episode.featured_image_url} alt="decorative" className="featuredImage"></img>
                    </div>
                    <div className="mediaPlayer">
                        "Media Player Widget goes here."
                    </div>
                </div>

                <div className="mediaLinks">
                    <div className="mediaLink">share and buttons</div>
                </div>

            </div>  
        </div>
            
    )
}

export default PodcastCard