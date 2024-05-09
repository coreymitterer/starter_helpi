//import React, { useState } from "react";
//import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../index.css";
import { DetailedQuiz } from "./DetailedQuiz";
//import Survey from "./Survey";

export function DetailedPage(): JSX.Element {
  return (
    <div>
      <div className="detailed">
        <div className="info-container">
          <div className="puff"></div>
          <div className="info-cloud">
            <h1>Detailed Career Quiz
              <span>Land Your Perfect Career</span>
                <p>
                  Experience next level exploration into various aspects of professional life! 
                  This comprehensive quiz is tailored for you and your unique strengths and aspirations.
                  You'll reflect on your skills, values, work environment preferences, and
                  career goals.
                </p>
            </h1>
          </div>
        </div>
        <div className="quiz-container">
          <div className="unfolded-plane">
            <div className="quiz">
              <DetailedQuiz></DetailedQuiz>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
