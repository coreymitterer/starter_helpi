
import "../index.css";
import { useState } from "react";
import { Button, ToggleButton } from "react-bootstrap";
import { DetailedQuiz } from "./DetailedQuiz";
import Survey from "./Survey";

interface DetailedString {
  setReports: (newString: string) => void;
}

/*
  This component is the main page for the Detailed Career Quiz.
  It handles the survey and quiz progression, user income and education preferences,
  and an optional ADHD mode with videos.
*/
export function DetailedPage({ setReports }: DetailedString): JSX.Element {
  const [surveyStarted, setSurveyStarted] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [income, setIncome] = useState<number>(0);
  const [education,setEducation] = useState<string>('');
  const [adhdMode, setAdhdMode] = useState<boolean>(false);
  const [videoIndex, setVideoIndex] = useState<number>(0);

  // Video Array for the ADHD Mode.
  const videos = ["https://www.youtube.com/embed/urFF8-PjQBE?si=3SaaFqZUTrQxr6KK&amp;start=60&autoplay=1&mute=1&controls=0", "https://www.youtube.com/embed/b65MoVwANq4?si=aX2TMMfmPsbbBmtI&amp;start=60&autoplay=1&controls=0", "https://www.youtube.com/embed/u7kdVe8q5zs?si=M5hTizZPJgrAhsR9&amp;start=120&autoplay=1&mute=1&controls=0"]

  function startSurvey(): void {
    setSurveyStarted(true);
  }
  function startQuiz(): void {
    setQuizStarted(true);
  }
  function toggleADHDMode(): void {
    setAdhdMode(!adhdMode);
  }
  function nextVideo(): void {
    setVideoIndex((videoIndex+1)%videos.length);
  }

  return (
    /*
    Returns all of the HTML for the Detailed Quiz landing page. 
    Will also check if the survey has been completed, if not, it 
    will prompt the user to fill out the survey before they complete
    the detailed quiz.  The props, Reports, Income, and Education are 
    defined in this return statement as well.
    */
    <div className="quiz-page">
      <div className="quiz">
        {adhdMode && (<div className="adhd">
          <iframe width="400" height="225"
          src={videos[videoIndex]}
          title="ADHD" 
          allow="autoplay"
          >
        </iframe>
        </div>)}
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
          {quizStarted && (<DetailedQuiz setReports={setReports} education={education} income={income}></DetailedQuiz>)}
          </div>
        </div>
        <ToggleButton
          className="rainbow-button"
          type="checkbox"
          id="adhd-mode"
          checked={adhdMode}
          value="1"
          onChange={toggleADHDMode}>
            ADHD Mode
        </ToggleButton>
        {adhdMode && (
          <Button
          className="rainbow-button"
          onClick={nextVideo}>
            <span>Next Video</span>
          </Button>)}
      </div>
    </div>
  );
}
