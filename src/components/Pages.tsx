import React, { useState } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../index.css";
import Survey from "./Survey";
import { DetailedPage } from "./DetailedPage";
import { BaseQuestionPage } from './BaseQuestionPage';
import { HomePage } from './HomePage';

export function Pages(): JSX.Element {
    const [isHome, setHome] = useState<boolean>(true);
    const [isBasic, setBasic] = useState<boolean>(false);
    const [isDetailed, setDetailed] = useState<boolean>(false);
    const [isReport, setReport] = useState<boolean>(false);
    const [surveyCompleted, setSurveyCompleted] = useState<boolean>(false);
    const [attemptedDetailed, setAttemptedDetailed] = useState(false);

    // Key information
    const saveKeyData = "MYKEY";
    const storedKey = localStorage.getItem(saveKeyData);
    const [key, setKey] = useState<string>(storedKey || ""); // Initialize key from localStorage if available

    const homeTooltip = (
        <Tooltip id="tooltip-basic">Home Is Where The Career Quizzes Are</Tooltip>
    );
    const basicTooltip = (
        <Tooltip id="tooltip-basic">Shorter Quiz For Your Dream Career</Tooltip>
    );
    const detailedTooltip = (
        <Tooltip id="tooltip-basic">Longer Quiz To Find Your Perfect Fit</Tooltip>
    );

    function updateSetHome(): void {
        setHome(true);
        setBasic(false);
        setDetailed(false);
        setReport(false);
    }

    function updateSetBasic(): void {
        setHome(false);
        setBasic(true);
        setDetailed(false);
        setReport(false);
    }

    function updateSetDetailed(): void {
      setHome(false);
      setBasic(false);
      setReport(false);
      setAttemptedDetailed(true); // User tried to access Detailed page.
  
      if (surveyCompleted) {
          setDetailed(true);
      } else {
          setDetailed(false); // Keep this false until the survey is completed.
      }
  }

    function updateSetReport(): void {
        setHome(false);
        setBasic(false);
        setDetailed(false);
        setReport(true);
        setAttemptedDetailed(false);
    }

 

    function handleSubmit() {
        localStorage.setItem(saveKeyData, JSON.stringify(key));
        window.location.reload();
    }

    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey(event.target.value);
    }

    return (
        <div>
            <div className="nav">
                <OverlayTrigger placement="bottom" overlay={homeTooltip}>
                    <Button className="button" onClick={updateSetHome} disabled={isHome}>Home</Button>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={basicTooltip}>
                    <Button className="button" onClick={updateSetBasic} disabled={isBasic}>Basic</Button>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={detailedTooltip}>
                    <Button className="button" onClick={updateSetDetailed} disabled={isDetailed}>Detailed</Button>
                </OverlayTrigger>
                <Button className="button" onClick={updateSetReport} disabled={isReport}>Reports</Button>
            </div>

            {isHome && 
            <div>
              <HomePage />
              <center>
              <Form>
                  <Form.Label>API Key:</Form.Label>
                  <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} size="sm" style={{ width: "200px" }} />
                  <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
              </Form>
              </center>
            </div>

            }
            {isBasic && <BaseQuestionPage />}
            {isDetailed && surveyCompleted && <DetailedPage />}
            {!isDetailed && attemptedDetailed && !surveyCompleted && (
              <Survey onCompletion={() => {
                  setSurveyCompleted(true);
                  setDetailed(true); // Now allow access to DetailedPage.
                  setAttemptedDetailed(false); // Reset attempt flag.
            }} />
)}
            {isReport && (
                <div className="report">
                    <h1>Welcome to the Reports page!</h1>
                    <p>This is where the careers will show up after taking the quizzes</p>
                </div>
            )}
        </div>
    );
}
