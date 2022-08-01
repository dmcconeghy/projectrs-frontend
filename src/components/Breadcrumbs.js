import React from "react"

import "./Breadcrumbs.css"

function Breadcrumbs() {

    return (
        <div className="breadcrumbBox">
            <div className="breadcrumbs">Home &gt; Resources &gt; Sample</div>
            {/* NOTE: BreadcrumbBox currently set to order 0 since home-body intecepts 0-1 associated with header box. 
                This also means "home-content below has a order of 1 rather than 2*/}
        </div>
    )
}

export default Breadcrumbs;