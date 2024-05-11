
import "../index.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { DetailedQuiz } from "./DetailedQuiz";

//Creates the detailed page with the title and description as well as the 
//Actual questions progress bar and submit
interface DetailedString {
  setReports: (DetailedString: string) => void;
}

export function DetailedPage({setReports}: DetailedString): JSX.Element {
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  function startQuiz(): void {
    setQuizStarted(true);
  }

  return (
    <div className="detailed">
      <div className="quiz">
        <div className="unfolded-plane">
          <div className="quiz-container">
          {!quizStarted && (
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
              onClick={startQuiz}
              >
                <span>Start Quiz</span>
            </Button>
          </div>)
          }
          {quizStarted && (<DetailedQuiz setReports={setReports}></DetailedQuiz>)}
          </div>
        </div>
      </div>
    </div>
  );
}
