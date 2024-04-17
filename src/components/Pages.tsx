import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../index.css";
import Survey from "./Survey";
import '../index.css';

export function Pages(): JSX.Element {
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
      <div className="nav">
        <div>
        <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={BasicPopover}
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
            overlay={HomePopover}
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
            
        </div>
    );
}