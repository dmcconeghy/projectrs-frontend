import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./Homepage";
import Podcasts from "./Podcasts";
import Tags from "./Tags";
import Contributors from "./Contributors";
import Responses from "./Responses";

function Components(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/podcasts" element={<Podcasts />} />
                <Route path="/tags" element={<Tags />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="/responses" element={<Responses />} />
                <Route path = "*" element={
                    <Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default Components