
import "../index.css";
import { DetailedQuiz } from "./DetailedQuiz";

//Creates the detailed page with the title and description as well as the 
//Actual questions progress bar and submit
export function DetailedPage(): JSX.Element {
  return (
    <div>
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
          <DetailedQuiz></DetailedQuiz>
        </div>
      </div>
    </div>
  );
}
