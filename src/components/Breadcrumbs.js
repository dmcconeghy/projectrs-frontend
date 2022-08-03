import React from "react"

import "./Breadcrumbs.css"

function Breadcrumbs() {


    if (window.location.pathname.includes("/contributors")) {
        return (
        <div className="breadcrumbBox"><div className="breadcrumbs">Home &#62; Contributors</div></div>
        )
    } else if (window.location.pathname.includes("/podcasts")) {
        return (
            <div className="breadcrumbBox"><div className="breadcrumbs">Home &#62; Resource &#62; Podcasts</div></div>
        ) 
    }else if (window.location.pathname.includes("/essays")) {
            return (
                <div className="breadcrumbBox"><div className="breadcrumbs">Home &#62; Resource &#62; Essays</div></div>
            )
    } else {
        return (
            <></>
        )
    }
    
}

export default Breadcrumbs;