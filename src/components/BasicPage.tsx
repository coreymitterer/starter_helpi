
import "../index.css";
import { BasicQuiz } from "./BasicQuiz";

//Creates the detailed page with the title and description as well as the 
//Actual questions progress bar and submit
export function BasicPage(): JSX.Element {
  return (
    <div>
      <div className="basic">
        <h1>Basic</h1>
        <h3>Welcome to the basic page!</h3>
        <p>
            Discover your career preferences and strengths with our Basic Career
            Quiz! Answer simple questions about your interests, skills, and
            goals to gain insights into potential career paths that align with
            your personality and aspirations. This quiz provides a starting
            point for your career journey.
        </p>
        <div className="quiz">
          <BasicQuiz></BasicQuiz>
        </div>
      </div>
    </div>
  );
}
