import React, { useState } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../index.css";
import Survey from "./Survey";
import '../index.css';
import { DetailedPage } from "./DetailedPage";
import { BaseQuestionPage }  from './BaseQuestionPage';
import { HomePage } from './HomePage'
//import { ReportsPage } from "./ReportsPage";

export function Pages(): JSX.Element {
    


    const [isHome, setHome] = useState<boolean>(true);
    const [isBasic, setBasic] = useState<boolean>(false);
    const [isDetailed, setDetailed] = useState<boolean>(false);
    const [isReport, setReport] = useState<boolean>(false);



    //Key information
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
        setDetailed(true);
        setReport(false);
    }
    
    function updateSetReport(): void {
      setHome(false);
      setBasic(false);
      setDetailed(false);
      setReport(true);

  }


    const [key, setKey] = useState<string>(keyData); //for api key input

    //sets the local storage item to the api key the user inputed
    function handleSubmit() {
      localStorage.setItem(saveKeyData, JSON.stringify(key));
      console.log(saveKeyData)
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
            delay={{ show: 100, hide: 100 }}
            overlay={detailedTooltip}
            >
                <Button className = "button" onClick={updateSetDetailed} disabled={isDetailed}>Detailed</Button>
            </OverlayTrigger>
                </div>
                        <Button className = "button" onClick={updateSetReport} disabled={isReport}>Reports</Button>
                <div>
                    <Survey></Survey>
                </div>
            </div>

            {isHome && (
              //Does a shift between pages by hiding each feature 
                <div className = "home">
                  <HomePage></HomePage>
                </div>
                
            )}
            {isBasic && (
                <div className = "basic">
                  <BaseQuestionPage></BaseQuestionPage>
                </div>
                
            )}
            {isDetailed && (
                  <DetailedPage></DetailedPage>
            )}
              {isReport&& (
                <div className = "report">
                  <h1>Welcome to the Reports page!</h1>
                <p>This is where the careers will show up after taking the quizes</p>
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