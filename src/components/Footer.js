import React from "react";

import "./Footer.css";

import masthead from "../images/masthead.png";
import rss from "../images/rss.svg";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import linkedin from "../images/linkedin.svg";


function Footer() {
    return (
        <footer className="footerBox">
            <div className="siteContent">
                <div className="siteNewsLetter">
                    <div className="siteMasthead">
                        <img src={masthead} alt="masthead logo"></img>
                    </div>
                    <div className="siteSubscribe">
                        <p>Subscribe to our mailing list.</p>
                        <p>Get podcasts, essay responses, and opportunities in your inbox.</p>
                    </div>
                    <div className="siteEmailBox">
                        <div className="siteEmailForm">
                            <div className="siteEmailInput">
                                <div className="siteEmailPlaceholder">Enter your email</div>
                            </div>
                            <div className="siteSubscribeButton">
                                <div className="siteSubscribeText">Subscribe</div>
                            </div>
                        </div>
                        <div className="siteSubscribePolicy">
                        By subscribing you agree to with our <a href="/privacy">Privacy Policy</a> and provide consent to receive updates from the RSP.
                        </div>
                    </div>

                </div>
                <div className="siteTree">
                    <div className="siteResourcesCol">
                        <div className="siteLinksTitle">Resources</div>
                        <div className="siteLinksList">
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/podcasts">Podcasts</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/responses">Essays</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/playlists">Playlists</a></p></div>
                            </div>
                        </div>
                    </div>
                    <div className="siteAboutCol">
                        <div className="siteLinksTitle">About</div>
                        <div className="siteLinksList">
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/mission">Mission</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/history">History</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/constitution">Constitution</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/contributors">Contributors</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/team">Team</a></p></div>
                            </div>
                        </div>
                    </div>
                    <div className="siteOpportunitiesCol">
                        <div className="siteLinksTitle">Opportunities</div>
                        <div className="siteLinksList">
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/support">Support the RSP</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/patreon">Become a Patron</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/team">Join the Team</a></p></div>
                            </div>
                        </div>
                    </div>
                    <div className="siteMediaChipsCol">
                        <div className="siteLinksTitle">Follow Us</div>
                        <div className="siteLinksList">
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/rss"><img src={rss} alt="rss logo"></img>RSS Feed</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/twitter"><img src={twitter} alt="twitter logo"></img>Twitter</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/instagram"><img src={instagram} alt="instagram logo"></img>Instagram</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/youtube"><img src={youtube} alt="youtube logo"></img>YouTube</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/facebook"><img src={facebook} alt="facebook logo"></img>Facebook</a></p></div>
                            </div>
                            <div className="siteLink">
                                <div className="siteLinkText"><p><a href="/linkedin"><img src={linkedin} alt="linkedin logo"></img>LinkedIn</a></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="siteCredits">
                    <div className="divider"></div>
                    <div className="licensesBox">
                        <div className="scio">
                        The Religious Studies Project is a Scottish Charitable Incorporated Organization (SCIO) devoted to producing engaging and accessible resources for the contemporary study of religion.
                        </div>
                        <div className="license">
                        This work is licensed under a Creative Commons Attribution- NonCommercial- NoDerivs 3.0 Unported License.

                        The views expressed in podcasts, features and responses are the views of the individual contributors, and do not necessarily reflect the views of The Religious Studies Project or our sponsors. The Religious Studies Project is produced by the Religious Studies Project Association (SCIO), a Scottish Charitable Incorporated Organisation (charity number SC047750).
                        </div>
                    </div>
                    <div className="copyrightBox">
                        <div className="copyright"> 2022 The Religious Studies Project. All rights reserved.</div>
                        <div className="footerLinkBox">
                            <div className="privacy">Privacy Policy</div>
                            <div className="terms">Terms of Service</div>
                            <div className="cookies">Cookies Settings</div>
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer