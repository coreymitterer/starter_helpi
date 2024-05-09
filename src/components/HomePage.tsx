import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../index.css";
import logo from "./ProfessionPilotLogo.png";
import { transform } from "typescript";

// TODO: Style Logo, style header text, style slogan text, add clouds for buttons, cloud themed divs for homepage. Sky, cloud, sky, cloud, etc.

/*
What Makes a Good Website:
    Customized logo representing your business.

    Navigation bar highlighting the vital pages in your website’s header.

    Hero section displaying pictures or videos in the header.

    Headline on the hero section stating your unique selling proposition (USP).

    Call-to-action (CTA) buttons in multiple strategic places.

    Social proof like authority website banners, testimonials, or customer reviews.

    Text like website copy and content.

    Media files such as photos or videos to keep visitors visually engaged.

    Footer summarizing your web pages using quick links.
*/


export function HomePage(): JSX.Element {
    const [index, setIndex] = useState<number>(0);
    const careerList = [
        "Developers",
        "Doctors",
        "Salespeople",
        "Artists",
        "Accountants",
        "Truck Drivers",
        "Managers",
        "Engineers",
        "Teachers",
        "Musicians"
    ];

    useEffect(() => {
        function cycleCareer(): void {
            setIndex((index+1)%careerList.length);
        }

        const intervalId = setInterval(cycleCareer, 3000); // Calls cycleCareer every 3 seconds
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [index, careerList.length]);
    
    return (
        <div className = "home">
            <div className = "main">
                {/* <Button
                    className="cloud"
                >
                    <div className="cloudText">Go To Basic Quiz</div>
                </Button> */}
                <div className="website-title">
                    <h1>Profession Pilot
                        <span>Now Boarding:<div className="listTerm">{careerList[index]}</div></span>
                    </h1>
                </div>
                {/* <div className="planes">
                    <div className="paper-plane-side-border">
                        <div className="paper-plane-side">
                            <div className="paper-plane-side-inner-border">
                                <div className="paper-plane-side-inner"></div>
                            </div>
                        </div>
                    </div>
                    <div className="paper-plane-side">
                        <div className="paper-plane-side-inner"></div>
                    </div>
                    <div className="paper-plane-side">
                        <div className="paper-plane-side-inner"></div>
                    </div>
                    <div className="gold-paper-plane-side">
                        <div className="gold-paper-plane-side-inner"></div>
                    </div>
                </div> */}
                {/* <div className="sun"></div> */}
                <div className="logo-container">
                    <svg fill = "none" viewBox="0 0 500 200">
                        <path className = "logo-trail" d="M 50 80 C 150 -20 250 200 350 80 C 420 -100 450 -40 450 50" />
                    </svg>
                    <div className="suit">
                        <div className = "suit-jacket">
                            <div className = "suit-collar"></div>
                            <div className = "suit-button-row">
                                <div className = "suit-button"></div>
                                <div className = "suit-button"></div>
                            </div>
                            <div className = "suit-bowtie-container">
                                <div className = "suit-bowtie-wings"></div>
                                <div className = "suit-bowtie-shading"></div>
                                <div className = "suit-bowtie-knot"></div>
                            </div>
                        </div>
                        <div className="paper-plane">
                            <div className="paper-plane-inner"></div>
                        </div>
                    </div>
                </div>
                {/* <Button
                    type="button"
                    className="cloud"
                >
                    <div className="cloudText">Go To Detailed Quiz</div>
                </Button> */}
                {/* <div className="sun"></div> */}
                <div className="border-container">
                    <div className="row-container">
                        <div className="border-cloud"></div>
                        <div className="border-cloud"></div>
                        <div className="border-cloud"></div>
                        <div className="border-cloud"></div>
                    </div>
                    <div className="row-container">
                        <div className="border-cloud"></div>
                        <div className="border-cloud"></div>
                        <div className="border-cloud"></div>
                    </div>
                    <div className="row-container">
                        <div className="border-cloud"></div>
                        <div className="border-cloud"></div>
                    </div>
                    <div className="row-container">
                        <div className="border-cloud">
                        </div>
                    </div>
                </div>
            </div>
            {/* Assuring a smooth landing into your new career */}
            <div className = "features">
                <div className="feature-cloud">
                    <div className = "feature-cloud-title">GPT Integration</div>
                    <div className="feature-cloud-text">Seamless integration of ChatGPT to analyze your responses and give you the perfect career</div>
                </div>
                <div className="feature-cloud">
                    <div className = "feature-cloud-title">Detailed Analysis</div>
                    <div className = "feature-cloud-text">Detailed analysis of your responses to give you the best career options</div>
                </div>
                <div className="feature-cloud">
                    <div className = "feature-cloud-title">User Friendly</div>
                    <div className = "feature-cloud-text">Easy to use interface that is user friendly and easy to navigate</div>
                </div>
            </div>
            <div className = "about">
                <div className="feature-cloud">
                    <div className = "feature-cloud-title">Authors</div>
                    <div className = "feature-cloud-text">Corey Mitterer, Ian Duffy, Logan Ponik, Junpuyin Wei</div>
                </div>
            </div>
        </div>
    );
}