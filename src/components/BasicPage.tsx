
import "../index.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { BasicQuiz } from "./BasicQuiz";

//Creates the detailed page with the title and description as well as the 
//Actual questions progress bar and submit
interface BasicString {
    setReports: (newString: string) => void;
}
export function BasicPage({setReports}: BasicString): JSX.Element {
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  function startQuiz(): void {
    setQuizStarted(true);
  }



  return (
    <div className="quiz-page">
      <div className="quiz">
        <div className="unfolded-plane">
          <div className="quiz-container">
          {!quizStarted && (
          <div>
            <h1>Basic Career Quiz
              <span>Career Takeoff Made Easy</span>
              <p>
                Discover your career preferences and strengths!
                <br></br> 
                This quiz provides a starting point for your career journey.
                <br></br>
                Answer simple questions to gain insights into potential career paths. 
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
          {quizStarted && (<BasicQuiz setReports={setReports}></BasicQuiz>)}
          </div>
        </div>
      </div>
    </div>
  );
}
