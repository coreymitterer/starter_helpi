import "../index.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { DetailedQuiz } from "./DetailedQuiz";
import "../index.css";
import Survey from "./Survey";

interface DetailedString {
  setReports: (newString: string) => void;
  income: number;
  education: string;
  setIncome: (income: number) => void;
  setEducation: (education: string) => void;
}

//Creates the detailed page with the title and description as well as the 
//Actual questions progress bar and submit
interface DetailedString {
  setReports: (DetailedString: string) => void;
}

export function DetailedPage({ setReports, income, education, setIncome, setEducation}: DetailedString): JSX.Element {
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  function startQuiz(): void {
    setQuizStarted(true);
  }

  return (
    <div>
      {!surveyCompleted ? (
        <Survey
          onCompletion={() => setSurveyCompleted(true)}
          setEducation={setEducation}
          setIncome={setIncome}
        />
      ) : (
        <div className="quiz-page">
          <div className="quiz">
            <div className="unfolded-plane">
              <div className="quiz-container">
                {!quizStarted && (
                  <div>
                    <h1>Detailed Career Quiz</h1>
                    <span>Land Your Perfect Career</span>
                    <p>
                      Experience next level exploration into various aspects of professional life!
                      <br />
                      This comprehensive quiz is tailored for you and your unique strengths and aspirations.
                      <br />
                      You'll reflect on your skills, values, work environment preferences, and career goals.
                    </p>
                    <Button className="button" onClick={startQuiz}>
                      <span>Start Quiz</span>
                    </Button>
                  </div>
                )}
                {quizStarted && (
                  <DetailedQuiz
                    setReports={setReports}
                    education={education}
                    income={income}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

