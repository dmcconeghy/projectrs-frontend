import React from "react";

import { Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import Podcasts from "./Podcasts";
import Tags from "./Tags";
import Contributors from "./Contributors";
import Responses from "./Responses";
import PodcastCard from "./PodcastCard";
import EpisodeDetails from "./EpisodeDetails";

function Components(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/podcasts" element={<Podcasts />} />
                <Route path="/podcasts/:slug" element={<EpisodeDetails />} />
                <Route path="/tags" element={<Tags />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="/responses" element={<Responses />} />
                <Route path = "*" element={
                    <PodcastCard />} />
            </Routes>
        </div>
    )
}

export default Components