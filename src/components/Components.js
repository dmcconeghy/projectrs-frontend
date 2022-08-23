import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./Homepage";
import Podcasts from "./Podcasts";
import Tags from "./Tags";
import Contributors from "./Contributors";
import Responses from "./Responses";
import EpisodeDetails from "./EpisodeDetails";
import ContributorDetails from "./ContributorDetails";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import TagDetails from "./TagDetails";
import Maintenance from "./Maintenance";

function Components(){
    return (
        <>
            <NavBar />

            <Breadcrumbs />

            <Routes>
                {/* <Route path="/home" element={<Homepage />} /> */}
                <Route path="/" element={<Maintenance />} />
                {/* <Route path="/podcasts" element={<Podcasts />} />
                <Route path="/podcasts/:slug_or_id" element={<EpisodeDetails />} />
                <Route path="/tags" element={<Tags />} />
                <Route path="/tags/:slug_or_id" element={<TagDetails />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="/contributors/:slug_or_id" element={<ContributorDetails />} />
                <Route path="/responses" element={<Responses />} /> */}
                <Route path = "*" element={<Navigate to="/" />} />
            </Routes>

            <Footer />
        </>  
    )
}

export default Components