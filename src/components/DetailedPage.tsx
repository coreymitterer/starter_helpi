import React, { useState } from "react";
import "../index.css";
import { DetailedQuiz } from "./DetailedQuiz";
import Survey from "./Survey";

interface DetailedString {
  setReports: (newString: string) => void;
  setIncome: (income: number) => void;
  setEducation: (education: string) => void;
}




export function DetailedPage({ setReports, setIncome, setEducation}: DetailedString): JSX.Element {
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  return (
    <div>
      {!surveyCompleted ? (
        <Survey 
          onCompletion={() => setSurveyCompleted(true)}
          setEducation={setEducation}
          setIncome={setIncome}         />
      ) : (
        <div className="detailed">
          <h1>Detailed</h1>
          <p>Welcome to the detailed page!</p>
          <p>
            Take your career exploration to the next level with our Detailed
            Career Quiz! Dive deep into various aspects of your professional life,
            including your skills, values, work environment preferences, and
            career goals. This comprehensive quiz is tailored for you and your
            unique strengths and aspirations. This quiz provides a deeper dive
            into potential careers so you can make informed choices.
          </p>
          <div className="quiz">
            <DetailedQuiz 
            setReports={setReports}
            setEducation={setEducation}
            setIncome={setIncome}
             />
          </div>
        </div>
      )}
    </div>
  );
}
