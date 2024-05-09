
import "../index.css";
import { DetailedQuiz } from "./DetailedQuiz";

//Creates the detailed page with the title and description as well as the 
//Actual questions progress bar and submit
interface DetailedString {
  setReports: (DetailedString: string) => void;
}

export function DetailedPage({setReports}: DetailedString): JSX.Element {
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
              <DetailedQuiz setReports={setReports}></DetailedQuiz>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
