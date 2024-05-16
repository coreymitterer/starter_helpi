import React, { useState, useEffect } from "react";
import { Button, Card, Placeholder } from "react-bootstrap";
import "../index.css";
import corey from "./coreyCISC275.jpg";
import ian from "./ianCISC275.jpg";
import logan from "./loganCISC275.png";
import jun from "./junCISC275.jpg";
import github from "./githubLogo.png";
//import logo from "./ProfessionPilotLogo.png";
//import { transform } from "typescript";

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
                <div className="website-title">
                    <h1>Profession Pilot
                        <span>Now Boarding:<div className="listTerm">{careerList[index]}</div></span>
                    </h1>
                </div>
                <div className="logo-container">
                    <div className="intro">
                        <div className="paper-plane">
                            <div className="paper-plane-inner"></div>
                        </div>
                    </div>
                    <svg fill = "none" viewBox="0 0 500 200">
                        {/* <path className = "logo-trail" d="M 50 80 C 150 -20 250 200 350 80 C 420 -100 450 -40 450 50" /> */}
                        <path className = "logo-trail" d="M 0 100 C 150 -20 250 200 350 80 C 400 -20 250 -25 250 30 L 250 40" />
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
            <div className = "features">
                <div className="text-cloud">
                    <div className = "features-container">
                        <h1>GPT Integration
                            <span>Seamless integration of ChatGPT to analyze your responses and give you the perfect career</span>
                        </h1>
                    </div>
                </div>
                <div className="text-cloud">
                    <div className = "features-container">
                        <h1>Detailed Analysis
                            <span>Detailed analysis of your responses to give you the best career options</span>
                        </h1>
                    </div>
                </div>
                <div className="text-cloud">
                    <div className = "features-container">
                        <h1>User Friendly
                            <span>Easy to use interface that is user friendly and easy to navigate</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className = "about">
                <Card className="authors" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={corey} />
                    <Card.Body>
                        <Card.Title>Corey Mitterer <span>Team Lead</span></Card.Title>
                        <Card.Text>
                            GPT Integration, Basic Quiz, Survey, Reports
                        </Card.Text>
                        <a href="https://github.com/connorbutsmaller">
                            <img src={github} alt="GitHub" style={{width: "50px", height: "50px"}}/>
                        </a>
                    </Card.Body>
                </Card>
                <Card className="authors" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ian} />
                    <Card.Body>
                        <Card.Title>Ian Duffy</Card.Title>
                        <Card.Text>
                            Home Page, Detailed Quiz, Survey, Reports, CSS
                        </Card.Text>
                        <a href="https://github.com/connorbutsmaller">
                            <img src={github} alt="GitHub" style={{width: "50px", height: "50px"}}/>
                        </a>
                    </Card.Body>
                </Card>
                <Card className="authors" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logan} />
                    <Card.Body>
                        <Card.Title>Logan Ponik</Card.Title>
                        <Card.Text>
                            GPT Implementation, Detailed Quiz, Survey, Reports
                        </Card.Text>
                        <a href="https://github.com/connorbutsmaller">
                            <img src={github} alt="GitHub" style={{width: "50px", height: "50px"}}/>
                        </a>
                    </Card.Body>
                </Card>
                <Card className="authors" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={jun} />
                    <Card.Body>
                        <Card.Title>Junpuyin Wei</Card.Title>
                        <Card.Text>
                            Basic Quiz, Quiz Questions, Survey
                        </Card.Text>
                        <a href="https://github.com/connorbutsmaller">
                            <img src={github} alt="GitHub" style={{width: "50px", height: "50px"}}/>
                        </a>
                    </Card.Body>
                </Card>
                {/* <div className="text-cloud">
                    <div className = "features-container">
                        <h1>Authors
                            <span>Corey Mitterer, Ian Duffy, Logan Ponik, Junpuyin Wei</span>
                        </h1>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
