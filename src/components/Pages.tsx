/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../index.css";
import Survey from "./Survey";
import "../index.css";

import Question1 from "/Users/junpuyinwei/starter_helpi/src/Qpage/Question1.jsx";
import Question2 from "../Qpage/Question2";
import Question3 from "../Qpage/Question3";
import Question4 from "../Qpage/Question4";
import Question5 from "../Qpage/Question5";
import Question6 from "../Qpage/Question6";
import Question7 from "../Qpage/Question7";
import Question8 from "../Qpage/Question8";
import Finapage from "../Qpage/Finapage";
import picture from "../Qpage/picture.jpeg";

export function Pages(): JSX.Element {
  //question part
  const [page1, setpage1] = useState(false);
  const [pages1, setpages1] = useState(false);
  const [page2, setpage2] = useState(false);
  const [pages2, setpages2] = useState(false);
  const [page3, setpage3] = useState(false);
  const [pages3, setpages3] = useState(false);
  const [page4, setpage4] = useState(false);
  const [pages4, setpages4] = useState(false);
  const [page5, setpage5] = useState(false);
  const [pages5, setpages5] = useState(false);
  const [page6, setpage6] = useState(false);
  const [pages6, setpages6] = useState(false);
  const [page7, setpage7] = useState(false);
  const [pages7, setpages7] = useState(false);
  const [page8, setpage8] = useState(false);
  const [pages8, setpages8] = useState(false);
  const [fina, setfina] = useState(false);

  //
  const [showbegin, setbegain] = useState(true);
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
    <Tooltip id="tooltip">Shorter Quiz For Your Dream Career</Tooltip>
  );
  const detailedTooltip = (
    <Tooltip id="tooltip">Longer Quiz To Find Your Perfect Fit</Tooltip>
  );
  const homeTooltip = (
    <Tooltip id="tooltip">Home Is Where The Career Quizzes Are</Tooltip>
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
            <Button
              className="button"
              onClick={updateSetDetailed}
              disabled={isDetailed}
            >
              Detailed
            </Button>
          </OverlayTrigger>
        </div>
        <div>
          <Survey></Survey>
        </div>
      </div>
      <body className="body">
        {/* <img src={picture} />
        <img /> */}
        {isHome && (
          <div className="home">
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            <p>Corey Mitterer</p>
            <p>Ian Duffy</p>
            <p>Logan Ponik</p>
            <p>Junpuyin Wei</p>
          </div>
        )}
        {isBasic && (
          <div className="basic">
            {showbegin && <h1>Basic</h1>}
            {showbegin && <p>Welcome to the basic page!</p>}
            {showbegin && (
              <p>
                Discover your career preferences and strengths with our Basic
                Career Quiz! Answer simple questions about your interests,
                skills, and goals to gain insights into potential career paths
                that align with your personality and aspirations. This quiz
                provides a starting point for your career journey.
              </p>
            )}

            {showbegin && (
              <button
                className="btn"
                onClick={() => {
                  setbegain(false);
                  setpage1(true);
                  setpages1(true);
                }}
              >
                Begain
              </button>
            )}
            {!showbegin && page1 && <Question1 />}
            {!showbegin && pages1 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage2(true);
                    setpage1(false);
                    setpages1(false);
                  }}
                >
                  Next
                </button>
              </div>
            )}
            {!showbegin && page2 && <Question2 />}
            {!showbegin && !page1 && page2 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage3(true);
                    setpages3(true);
                    setpage2(false);
                  }}
                >
                  Next
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage1(true);
                    setpage2(false);
                    setpages1(true);
                  }}
                >
                  Pre
                </button>
              </div>
            )}
            {!showbegin && !page2 && page3 && <Question3 />}
            {!showbegin && !page2 && page3 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage4(true);
                    setpages4(true);
                    setpage3(false);
                  }}
                >
                  Next
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage2(true);
                    setpage3(false);
                    setpages2(true);
                  }}
                >
                  Pre
                </button>
              </div>
            )}
            {!showbegin && page4 && <Question4 />}
            {!showbegin && !page3 && page4 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage5(true);
                    setpages5(true);
                    setpage4(false);
                  }}
                >
                  Next
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage3(true);
                    setpage4(false);
                    setpages3(true);
                  }}
                >
                  Pre
                </button>
              </div>
            )}
            {!showbegin && page5 && <Question5 />}
            {!showbegin && !page4 && page5 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage6(true);
                    setpages6(true);
                    setpage5(false);
                  }}
                >
                  Next
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage4(true);
                    setpage5(false);
                    setpages4(true);
                  }}
                >
                  Pre
                </button>
              </div>
            )}
            {!showbegin && page7 && <Question7 />}
            {!showbegin && !page6 && page7 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage8(true);
                    setpages8(true);
                    setpage7(false);
                  }}
                >
                  Next
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage6(true);
                    setpage7(false);
                    setpages6(true);
                  }}
                >
                  Pre
                </button>
              </div>
            )}
            {!showbegin && page6 && <Question6 />}
            {!showbegin && !page5 && page6 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage7(true);
                    setpages7(true);
                    setpage6(false);
                  }}
                >
                  Next
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage5(true);
                    setpage6(false);
                    setpages5(true);
                  }}
                >
                  Pre
                </button>
              </div>
            )}
            {!showbegin && page8 && <Question8 />}
            {!showbegin && !page7 && page8 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage8(false);
                    setpages8(false);
                    setpage7(false);
                    setfina(true);
                  }}
                >
                  Next
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage7(true);
                    setpage8(false);
                    setpages7(true);
                  }}
                >
                  Pre
                </button>
              </div>
            )}
            {!showbegin && !page8 && fina && <Finapage />}
          </div>
        )}
        {isDetailed && (
          // Put the content of the 'Detailed' page here
          <div className="detailed">
            <h1>Detailed</h1>
            <p>Welcome to the detailed page!</p>
            <p>
              Take your career exploration to the next level with our Detailed
              Career Quiz! Dive deep into various aspects of your professional
              life, including your skills, values, work environment preferences,
              and career goals. This comprehensive quiz is tailored for you and
              your unique strengths and aspirations. This quiz provides a deeper
              dive into potential careers so you can make informed choices.
            </p>
          </div>
        )}
      </body>
      <center>
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Insert API Key Here"
            onChange={changeKey}
            size="sm"
            style={{ width: "200px" }}
          />
          <br></br>
          <Button className="Submit-Button" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </center>
    </div>
  );
}
