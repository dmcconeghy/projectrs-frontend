import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ProjectrsApi from "../api";
// import ContributorCard from "./ContributorCard";

import "./ContributorDetails.css";

function ContributorDetails() {
    const { slug } = useParams();
    const [contributor, setContributor] = useState(null);

    function parseBio(){
        return {__html: contributor.bio_text}
    }

    useEffect(() => {
        async function getContributor() {
           setContributor(await ProjectrsApi.getContributor(slug));
        }
        getContributor();
        }, [slug]);
        
        if (!contributor) return <LoadingSpinner />;

        // let contributorCard = <ContributorCard key={contributor.contributor_id} contributor={contributor} />

        return (
            <div className="contributorDetails">
                <div className="contributorBox">
                    <div className="contributorContainer">
                        <div className="contributorContent">
                            <div className="contributorBio">
                                <div className="contributorName">
                                    <div className="contributorNameText">{contributor.name}</div>
                                </div>
                                <div className="contributorBioText" dangerouslySetInnerHTML={parseBio()}>
                                </div>
                                <div className="contributorMoreInfo">MORE ABOUT</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contributorImageBox">
                    <img src="https://s3-alpha-sig.figma.com/img/4229/0988/db2384841172f084c91579ebc5940fed?Expires=1660521600&Signature=Q4EQjnQ~bn4U1AUm~Jc2KJHpmt5R5uO~LeuF4npZUH9QJj5i-KDEFUftEcvwJUMQSkt4v6BVQNhUJfBoeCD83mX1V3r8otxGOKO5ZjnEe572YcEVjq1iz2~FQqMte7EYEyJkA-sshrWx7M-pGc56Poc4AlVtrhHG99Lj5BCwwB3yhmBIq3TVk5big-ih9tXlmTgVCsG5T5Va3IXoFWEYaO7REgy1GEwg7amn4T6gGLHmom0qVKcUIH0qTnRl6LEB4aRBU4NfIg2Uw7nUTMu7miZ0PNm3D19ui0eXtM4K0xHKvmdJ-b~BvjKeGGdSWNdSiKTcvxBoyajIguNYc0z1BQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="placeholder profile headshot" className="contributorHeadshot"></img>
                </div>
                

                         
                {/* {contributorCard}

                <div className="episode-Contributors">CONTRIBUTOR COMPONENT</div>
                <div className="episode-Video">VIDEO COMPONENT</div>
                <div className="episode-Transcript">TRANSCRIPT COMPONENT</div>
                <div className="episode-Responses">RESPONSES COMPONENT</div> */}

            </div>
        )
}

export default ContributorDetails;