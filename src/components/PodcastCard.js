import React from "react";
import { Link } from "react-router-dom";

import "./PodcastCard.css";    

function PodcastCard({episode}){
    // console.log(episode)

    function parsePodcast(){
        return {__html: episode.excerpt}
    }

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
                            <div className="tag">#TAG</div>
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
            

        // {/* <p>Date published: {episode.date_created}</p>
        // <p>Slug: {episode.slug}</p>
        // <p>Audio Link: {episode.mp3_file_url}</p>
        // <div>Excerpt: <div dangerouslySetInnerHTML={parsePodcast()}></div></div>
        // <p>{episode.excerpt}</p> */}
                    
        
        
    
    )
}

export default PodcastCard