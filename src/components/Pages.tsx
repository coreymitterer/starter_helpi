import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../index.css";
import Survey from "./Survey";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



export function Pages(): JSX.Element {
    const [responseBasic, setResponse] = useState<string>("");
    const [responseBasic2, setResponse2] = useState<string>("");
    const [responseBasic3, setResponse3] = useState<string>("");
    const [responseBasic4, setResponse4] = useState<string>("");
    const [responseBasic5, setResponse5] = useState<string>("");
    const [responseBasic6, setResponse6] = useState<string>("");
    const [responseBasic7, setResponse7] = useState<string>("");
    
    

    const [isHome, setHome] = useState<boolean>(true);
    const [isBasic, setBasic] = useState<boolean>(false);
    const [isDetailed, setDetailed] = useState<boolean>(false);
    const basicTooltip = (
        <Tooltip id="tooltip">
          Shorter Quiz For Your Dream Career
        </Tooltip>
      );
      const detailedTooltip = (
        <Tooltip id="tooltip">
          Longer Quiz To Find Your Perfect Fit 
        </Tooltip>
      );
      const homeTooltip = (
        <Tooltip id="tooltip">
          Home Is Where The Career Quizzes Are
        </Tooltip>
      );
    function updateSetHome(): void {
        setHome(true);
        setBasic(false);
        setDetailed(false);
    }

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
        <div>
            <div className = "nav">
                <div>
                <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={basicTooltip}
            >
      <Button className = "button" onClick={updateSetBasic} disabled={isBasic}>Basic</Button>
    </OverlayTrigger>
                </div>
                <div>
                <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={homeTooltip}
            >
                <Button className = "button" onClick={updateSetHome} disabled={isHome}>Home</Button>
            </OverlayTrigger>
                </div>
                <div>
                <OverlayTrigger
            placement="bottom"
            delay={{ show: 100, hide: 100 }}
            overlay={detailedTooltip}
            >
                <Button className = "button" onClick={updateSetDetailed} disabled={isDetailed}>Detailed</Button>
            </OverlayTrigger>
                </div>
                <div>
                    <Survey></Survey>
                </div>
            </div>

            {isHome && (
                <div className = "home">
                    <h1>Home</h1>
                    <p>Welcome to the home page!</p>
                    <p>Corey Mitterer</p>
                    <p>Ian Duffy</p>
                    <p>Logan Ponik</p>
                    <p>Junpuyin Wei</p>
                </div>
            )}
            {isBasic && (
                <div className = "basic">
                    
                    <h1>Basic</h1>
                    <p>Welcome to the basic page!</p>
                    <p>Discover your career preferences and strengths with our Basic Career Quiz! Answer simple questions about your interests, skills, and goals to gain insights into potential career paths that align with your personality and aspirations. This quiz provides a starting point for your career journey.</p>
                    <u><h2>Question 1</h2></u>
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic === "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic === "Strongly Disagree"}
        />
        <u><h2>Question 2</h2></u>
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse2(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic2 === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse2(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic2 === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse2(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic2 === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse2(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic2 === "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse2(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic2 === "Strongly Disagree"}
        />
                <u><h2>Question 3</h2></u>
                    <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse3(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic3 === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse3(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic3 === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse3(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic3 === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse3(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic3 === "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse3(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic3 === "Strongly Disagree"}
        />
                <u><h2>Question 4</h2></u>
                    <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse4(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic4 === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse4(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic4 === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse4(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic4 === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse4(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic4 === "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse4(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic4 === "Strongly Disagree"}
        />
                <u><h2>Question 5</h2></u>
                    <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse5(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic5 === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse5(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic5 === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse5(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic5 === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse5(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic5 === "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse5(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic5 === "Strongly Disagree"}
        />
                <u><h2>Question 6</h2></u>
                    <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse6(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic6 === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse6(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic6 === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse6(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic6 === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse6(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic6=== "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse6(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic6 === "Strongly Disagree"}
        />
                <u><h2>Question 7</h2></u>
                    <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse7(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic7 === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse7(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic7 === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse7(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic7 === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse7(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic7 === "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse7(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic7 === "Strongly Disagree"}
        />
                </div>
            )}
            {isDetailed && (
                // Put the content of the 'Detailed' page here
                <div className = "detailed">
                    <h1>Detailed</h1>
                    <p>Welcome to the detailed page!</p>
                    <p>Take your career exploration to the next level with our Detailed Career Quiz! Dive deep into various aspects of your professional life, including your skills, values, work environment preferences, and career goals. This comprehensive quiz is tailored for you and your unique strengths and aspirations. This quiz provides a deeper dive into potential careers so you can make informed choices.</p>
                    <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic === "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic === "Strongly Disagree"}
        />
        <u><h2>Question 2</h2></u>
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse2(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic2 === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse2(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic2 === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse2(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic2 === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse2(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic2 === "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse2(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic2 === "Strongly Disagree"}
        />
                <u><h2>Question 3</h2></u>
                    <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse3(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic3 === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse3(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic3 === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse3(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic3 === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse3(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic3 === "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse3(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic3 === "Strongly Disagree"}
        />
                <u><h2>Question 4</h2></u>
                    <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse4(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic4 === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse4(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic4 === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse4(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic4 === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse4(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic4 === "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse4(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic4 === "Strongly Disagree"}
        />
                <u><h2>Question 5</h2></u>
                    <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse5(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic5 === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse5(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic5 === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse5(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic5 === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse5(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic5 === "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse5(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic5 === "Strongly Disagree"}
        />
                <u><h2>Question 6</h2></u>
                    <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse6(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic6 === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse6(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic6 === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse6(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic6 === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse6(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic6=== "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse6(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic6 === "Strongly Disagree"}
        />
                <u><h2>Question 7</h2></u>
                    <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse7(e.target.value)}
            id="Strongly Agree"
            label="Strongly Agree"
            value="Strongly Agree"
            checked={responseBasic7 === "Strongly Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse7(e.target.value)}
            id="Agree"
            label="Agree"
            value="Agree"
            checked={responseBasic7 === "Agree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse7(e.target.value)}
            id="Neutral"
            label="Neutral"
            value="Neutral"
            checked={responseBasic7 === "Neutral"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse7(e.target.value)}
            id="Disagree"
            label="Disagree"
            value="Disagree"
            checked={responseBasic7 === "Disagree"}
        />
        <Form.Check
            inline
            type="radio"
            name="response"
            onChange={(e) => setResponse7(e.target.value)}
            id="Strongly Disagree"
            label="Strongly Disagree"
            value="Strongly Disagree"
            checked={responseBasic7 === "Strongly Disagree"}
        />
                </div>
            )}
            
        </div>
    );
}