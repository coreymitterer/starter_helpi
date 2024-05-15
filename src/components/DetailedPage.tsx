
import "../index.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { DetailedQuiz } from "./DetailedQuiz";
import Survey from "./Survey";

interface DetailedString {
  setReports: (newString: string) => void;
  income: number;
  education: string;
  setIncome: (income: number) => void;
  setEducation: (education: string) => void;
}

export function DetailedPage({ setReports, income, education, setIncome, setEducation}: DetailedString): JSX.Element {
  const [surveyStarted, setSurveyStarted] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  function startSurvey(): void {
    setSurveyStarted(true);
  }
  function startQuiz(): void {
    setQuizStarted(true);
  }

  return (
    <div className="quiz-page">
      <div className="quiz">
        <div className="unfolded-plane">
          <div className="quiz-container">
          {!quizStarted && !surveyStarted && (
          <div>
            <h1>Detailed Career Quiz
              <span>Land Your Perfect Career</span>
              <p>
                Experience next level exploration into various aspects of professional life!
                <br></br>
                This comprehensive quiz is tailored for you and your unique strengths and aspirations.
                <br></br> 
                You'll reflect on your skills, values, work environment preferences, and career goals.
              </p>
            </h1>
            <Button
              className="button"
              onClick={startSurvey}
              >
                <span>Start Quiz</span>
            </Button>
          </div>)
          }
          {surveyStarted && !quizStarted && (
            <Survey
              onCompletion={startQuiz}
              setIncome={setIncome}
              setEducation={setEducation}
            ></Survey>
          )}
          {quizStarted && (<DetailedQuiz setReports={setReports}></DetailedQuiz>)}
          </div>
        </div>
      </div>
    </div>
  );
}
