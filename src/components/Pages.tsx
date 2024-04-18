import React, { useState } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../index.css";
import Survey from "./Survey";
import '../index.css';

export function Pages(): JSX.Element {
    const [isHome, setHome] = useState<boolean>(true);
    const [isBasic, setBasic] = useState<boolean>(false);
    const [isDetailed, setDetailed] = useState<boolean>(false);
    let keyData = "";
    const saveKeyData = "MYKEY";
    const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
    if (prevKey !== null) {
        keyData = JSON.parse(prevKey);
    }
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

    const [key, setKey] = useState<string>(keyData); //for api key input

    //sets the local storage item to the api key the user inputed
    function handleSubmit() {
      localStorage.setItem(saveKeyData, JSON.stringify(key));
      window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
    }
  
    //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
      setKey(event.target.value);
    }
  return (
    <div>
      <div className="nav">
        <div>
        <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={basicTooltip}
        >
            <Button
                type="button"
                className="button"
                onClick={updateSetBasic}
                disabled={isBasic}
            >
                <span className="button-span">Basic</span>
            </Button>
          </OverlayTrigger>
        </div>
        <div>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={homeTooltip}
          >
            <Button
              className="button"
              onClick={updateSetHome}
              disabled={isHome}
            >
              <span className="button-span">Home</span>
            </Button>
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
                </div>
            )}
            {isDetailed && (
                // Put the content of the 'Detailed' page here
                <div className = "detailed">
                    <h1>Detailed</h1>
                    <p>Welcome to the detailed page!</p>
                    <p>Take your career exploration to the next level with our Detailed Career Quiz! Dive deep into various aspects of your professional life, including your skills, values, work environment preferences, and career goals. This comprehensive quiz is tailored for you and your unique strengths and aspirations. This quiz provides a deeper dive into potential careers so you can make informed choices.</p>
                </div>
            )}
            <center>
        <Form>
            <Form.Label>API Key:</Form.Label>
            <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} size="sm" style={{ width: "200px" }} />
            <br></br>
            <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      </center>
        </div>
    );
}