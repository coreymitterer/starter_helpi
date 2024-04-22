import { useState } from "react";
import {Button } from "react-bootstrap";
import "../index.css";
import logo from "./ProfessionPilotLogo.png";

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
    const [isHome, setHome] = useState<boolean>(true);
    const [isBasic, setBasic] = useState<boolean>(false);
    const [isDetailed, setDetailed] = useState<boolean>(false);

    function updateSetBasic(): void {
        setHome(false);
        setBasic(true);
        setDetailed(false);
    }

    function updateSetDetailed(): void {
        setHome(false);
        setBasic(false);
        setDetailed(true);
    }

    return (
        <div className = "home">
            <div className = "main">
                <img 
                    src = {logo}
                    alt = "Profession Pilot Logo">
                </img>
                <Button
                    type="button"
                    className="nextButton"
                    onClick={updateSetBasic}
                 >
                    <span className="button-span">Basic</span>
                </Button>
                <Button
                    type="button"
                    className="prevButton"
                    onClick={updateSetDetailed}
                    >
                    <span className="button-span">Detailed</span>
                </Button>
            </div>
            {/* Assuring a smooth landing into your new career */}
            <div className = "features"> </div>
            <div className = "services"> </div>
            <div className = "about"> </div>
            <h1>Home</h1>
                <p>Welcome to the home page!</p>
                <p>Corey Mitterer</p>
                <p>Ian Duffy</p>
                <p>Logan Ponik</p>
                <p>Junpuyin Wei</p>
        </div>
    );
}