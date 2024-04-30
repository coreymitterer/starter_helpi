import "../index.css";
import { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import BaseQuestion from "./BaseQuestion";

// DFI: number = 0;
export function BaseQuestionPage(): JSX.Element {
  const [showbegin, setbegin] = useState(true);
  const [page1, setpage1] = useState(false);
  const [pages1, setpages1] = useState(false);
  const [page2, setpage2] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pages2, setpages2] = useState(false);
  const [page3, setpage3] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pages3, setpages3] = useState(false);
  const [page4, setpage4] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pages4, setpages4] = useState(false);
  const [page5, setpage5] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pages5, setpages5] = useState(false);
  const [page6, setpage6] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pages6, setpages6] = useState(false);
  const [page7, setpage7] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pages7, setpages7] = useState(false);
  const [page8, setpage8] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pages8, setpages8] = useState(false);
  const [page9, setpage9] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pages9, setpages9] = useState(false);
  let Number = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [questionIndex, setQuestionIndex] = useState<number>(Number);

  return (
    <div>
      <div className="basic">
        {showbegin && <h1>Basic</h1>}
        {showbegin && <p>Welcome to the basic page!</p>}
        {showbegin && (
          <p>
            Discover your career preferences and strengths with our Basic Career
            Quiz! Answer simple questions about your interests, skills, and
            goals to gain insights into potential career paths that align with
            your personality and aspirations. This quiz provides a starting
            point for your career journey.
          </p>
        )}
        {showbegin && (
          <Button
            className="btn"
            onClick={() => {
              setbegin(false);
              setpage1(true);
              setpages1(true);
            }}
          >
            Begin
          </Button>
        )}
        {!showbegin && page1 && (
          <ProgressBar
            now={(1 / BaseQuestion.length) * 100}
            label={7 + " Questions Left"}
          />
        )}
        <div className="Q1">
          {!showbegin && page1 && BaseQuestion[0].question}
          <div>
            {!showbegin && page1 && BaseQuestion[0].a}
            {!showbegin && page1 && (
              <input type="radio" name="Agree1" value="4" />
            )}
          </div>
          <div>
            {!showbegin && page1 && BaseQuestion[0].b}
            {!showbegin && page1 && (
              <input type="radio" name="Agree1" value="3" />
            )}
          </div>
          <div>
            {!showbegin && page1 && BaseQuestion[0].c}
            {!showbegin && page1 && (
              <input type="radio" name="Agree1" value="2" />
            )}
          </div>
          <div>
            {!showbegin && page1 && BaseQuestion[0].d}
            {!showbegin && page1 && (
              <input type="radio" name="Agree1" value="1" />
            )}
          </div>
          <div>
            {!showbegin && page1 && BaseQuestion[0].e}
            {!showbegin && page1 && (
              <input type="radio" name="Agree1" value="0" />
            )}
          </div>
          {!showbegin && pages1 && (
            <div>
              <Button
                className="btn"
                onClick={() => {
                  setpage2(true);
                  setpage1(false);
                  setpages1(false);
                }}
              >
                Next
              </Button>
            </div>
          )}
        </div>
        <div className="Q2">
          {!showbegin && page2 && (
            <ProgressBar
              now={(2 / BaseQuestion.length) * 100}
              label={6 + " Questions Left"}
            />
          )}
          {!showbegin && page2 && BaseQuestion[1].question}
          <div>
            {!showbegin && !page1 && page2 && BaseQuestion[1].a}
            {!showbegin && !page1 && page2 && (
              <input type="radio" name="Agree2" value="4" />
            )}
          </div>
          <div>
            {!showbegin && !page1 && page2 && BaseQuestion[1].b}
            {!showbegin && !page1 && page2 && (
              <input type="radio" name="Agree2" value="3" />
            )}
          </div>
          <div>
            {!showbegin && !page1 && page2 && BaseQuestion[1].c}
            {!showbegin && !page1 && page2 && (
              <input type="radio" name="Agree2" value="2" />
            )}
          </div>
          <div>
            {!showbegin && !page1 && page2 && BaseQuestion[1].d}
            {!showbegin && !page1 && page2 && (
              <input type="radio" name="Agree2" value="1" />
            )}
          </div>
          <div>
            {!showbegin && !page1 && page2 && BaseQuestion[1].e}
            {!showbegin && !page1 && page2 && (
              <input type="radio" name="Agree2" value="0" />
            )}
            {!showbegin && !page1 && page2 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage1(true);
                    setpage2(false);
                    setpages1(true);
                  }}
                >
                  Pre
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage3(true);
                    setpages3(true);
                    setpage2(false);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="Q3">
          {!showbegin && page3 && (
            <ProgressBar
              now={(3 / BaseQuestion.length) * 100}
              label={5 + " Questions Left"}
            />
          )}
          {!showbegin && page3 && BaseQuestion[2].question}

          <div>
            {!showbegin && !page2 && page3 && BaseQuestion[2].a}
            {!showbegin && !page2 && page3 && (
              <input type="radio" name="Agree3" value="4" />
            )}
          </div>
          <div>
            {!showbegin && !page2 && page3 && BaseQuestion[2].b}
            {!showbegin && !page2 && page3 && (
              <input type="radio" name="Agree3" value="3" />
            )}
          </div>
          <div>
            {!showbegin && !page2 && page3 && BaseQuestion[2].c}
            {!showbegin && !page2 && page3 && (
              <input type="radio" name="Agree3" value="2" />
            )}
          </div>
          <div>
            {!showbegin && !page2 && page3 && BaseQuestion[2].d}
            {!showbegin && !page2 && page3 && (
              <input type="radio" name="Agree3" value="1" />
            )}
          </div>
          <div>
            {!showbegin && !page2 && page3 && BaseQuestion[2].e}
            {!showbegin && !page2 && page3 && (
              <input type="radio" name="Agree3" value="0" />
            )}
            {!showbegin && !page2 && page3 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage2(true);
                    setpage3(false);
                    setpages2(true);
                  }}
                >
                  Pre
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage4(true);
                    setpages4(true);
                    setpage3(false);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="Q4">
          {!showbegin && page4 && (
            <ProgressBar
              now={(4 / BaseQuestion.length) * 100}
              label={4 + " Questions Left"}
            />
          )}
          {!showbegin && page4 && BaseQuestion[3].question}

          <div>
            {!showbegin && !page3 && page4 && BaseQuestion[3].a}
            {!showbegin && !page3 && page4 && (
              <input type="radio" name="Agree4" value="4" />
            )}
          </div>
          <div>
            {!showbegin && !page3 && page4 && BaseQuestion[3].b}
            {!showbegin && !page3 && page4 && (
              <input type="radio" name="Agree4" value="3" />
            )}
          </div>
          <div>
            {!showbegin && !page3 && page4 && BaseQuestion[3].c}
            {!showbegin && !page3 && page4 && (
              <input type="radio" name="Agree4" value="2" />
            )}
          </div>
          <div>
            {!showbegin && !page3 && page4 && BaseQuestion[3].d}
            {!showbegin && !page3 && page4 && (
              <input type="radio" name="Agree4" value="1" />
            )}
          </div>
          <div>
            {!showbegin && !page3 && page4 && BaseQuestion[3].e}
            {!showbegin && !page3 && page4 && (
              <input type="radio" name="Agree4" value="0" />
            )}
            {!showbegin && !page3 && page4 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage3(true);
                    setpage4(false);
                    setpages3(true);
                  }}
                >
                  Pre
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage5(true);
                    setpages5(true);
                    setpage4(false);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="Q5">
          {!showbegin && page5 && (
            <ProgressBar
              now={(5 / BaseQuestion.length) * 100}
              label={3 + " Questions Left"}
            />
          )}
          {!showbegin && page5 && BaseQuestion[4].question}

          <div>
            {!showbegin && !page4 && page5 && BaseQuestion[4].a}
            {!showbegin && !page4 && page5 && (
              <input type="radio" name="Agree5" value="4" />
            )}
          </div>
          <div>
            {!showbegin && !page4 && page5 && BaseQuestion[4].b}
            {!showbegin && !page4 && page5 && (
              <input type="radio" name="Agree5" value="3" />
            )}
          </div>
          <div>
            {!showbegin && !page4 && page5 && BaseQuestion[4].c}
            {!showbegin && !page4 && page5 && (
              <input type="radio" name="Agree5" value="2" />
            )}
          </div>
          <div>
            {!showbegin && !page4 && page5 && BaseQuestion[4].d}
            {!showbegin && !page4 && page5 && (
              <input type="radio" name="Agree5" value="1" />
            )}
          </div>
          <div>
            {!showbegin && !page4 && page5 && BaseQuestion[4].e}
            {!showbegin && !page4 && page5 && (
              <input type="radio" name="Agree5" value="0" />
            )}
            {!showbegin && !page4 && page5 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage4(true);
                    setpage5(false);
                    setpages4(true);
                  }}
                >
                  Pre
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage6(true);
                    setpages6(true);
                    setpage5(false);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="Q6">
          {!showbegin && page6 && (
            <ProgressBar
              now={(6 / BaseQuestion.length) * 100}
              label={2 + " Questions Left"}
            />
          )}
          {!showbegin && page6 && BaseQuestion[5].question}

          <div>
            {!showbegin && !page5 && page6 && BaseQuestion[5].a}
            {!showbegin && !page5 && page6 && (
              <input type="radio" name="Agree6" value="4" />
            )}
          </div>
          <div>
            {!showbegin && !page5 && page6 && BaseQuestion[5].b}
            {!showbegin && !page5 && page6 && (
              <input type="radio" name="Agree6" value="3" />
            )}
          </div>
          <div>
            {!showbegin && !page5 && page6 && BaseQuestion[5].c}
            {!showbegin && !page5 && page6 && (
              <input type="radio" name="Agree6" value="2" />
            )}
          </div>
          <div>
            {!showbegin && !page5 && page6 && BaseQuestion[5].d}
            {!showbegin && !page5 && page6 && (
              <input type="radio" name="Agree6" value="1" />
            )}
          </div>
          <div>
            {!showbegin && !page5 && page6 && BaseQuestion[5].e}
            {!showbegin && !page5 && page6 && (
              <input type="radio" name="Agree6" value="0" />
            )}
            {!showbegin && !page5 && page6 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage5(true);
                    setpage6(false);
                    setpages5(true);
                  }}
                >
                  Pre
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage7(true);
                    setpages7(true);
                    setpage6(false);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="Q7">
          {!showbegin && page7 && (
            <ProgressBar
              now={(7 / BaseQuestion.length) * 100}
              label={1 + " Questions Left"}
            />
          )}
          {!showbegin && page7 && BaseQuestion[6].question}

          <div>
            {!showbegin && !page6 && page7 && BaseQuestion[6].a}
            {!showbegin && !page6 && page7 && (
              <input type="radio" name="Agree7" value="4" />
            )}
          </div>
          <div>
            {!showbegin && !page6 && page7 && BaseQuestion[6].b}
            {!showbegin && !page6 && page7 && (
              <input type="radio" name="Agree7" value="3" />
            )}
          </div>
          <div>
            {!showbegin && !page6 && page7 && BaseQuestion[6].c}
            {!showbegin && !page6 && page7 && (
              <input type="radio" name="Agree7" value="2" />
            )}
          </div>
          <div>
            {!showbegin && !page6 && page7 && BaseQuestion[6].d}
            {!showbegin && !page6 && page7 && (
              <input type="radio" name="Agree7" value="1" />
            )}
          </div>
          <div>
            {!showbegin && !page6 && page7 && BaseQuestion[6].e}
            {!showbegin && !page6 && page7 && (
              <input type="radio" name="Agree7" value="0" />
            )}
            {!showbegin && !page6 && page7 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage6(true);
                    setpage7(false);
                    setpages6(true);
                  }}
                >
                  Pre
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage8(true);
                    setpages8(true);
                    setpage7(false);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="Q8">
          {!showbegin && page8 && (
            <ProgressBar
              now={(8 / BaseQuestion.length) * 100}
              label={0 + " Questions Left"}
            />
          )}
          {!showbegin && page8 && BaseQuestion[7].question}

          <div>
            {!showbegin && !page7 && page8 && BaseQuestion[7].a}
            {!showbegin && !page7 && page8 && (
              <input type="radio" name="Agree8" value="4" />
            )}
          </div>
          <div>
            {!showbegin && !page7 && page8 && BaseQuestion[7].b}
            {!showbegin && !page7 && page8 && (
              <input type="radio" name="Agree8" value="3" />
            )}
          </div>
          <div>
            {!showbegin && !page7 && page8 && BaseQuestion[7].c}
            {!showbegin && !page7 && page8 && (
              <input type="radio" name="Agree8" value="2" />
            )}
          </div>
          <div>
            {!showbegin && !page7 && page8 && BaseQuestion[7].d}
            {!showbegin && !page7 && page8 && (
              <input type="radio" name="Agree8" value="1" />
            )}
          </div>
          <div>
            {!showbegin && !page7 && page8 && BaseQuestion[7].e}
            {!showbegin && !page7 && page8 && (
              <input type="radio" name="Agree7" value="0" />
            )}
            {!showbegin && !page7 && page8 && (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setpage7(true);
                    setpage8(false);
                    setpages7(true);
                  }}
                >
                  Pre
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setpage9(true);
                    setpages9(true);
                    setpage8(false);
                  }}
                >
                  Submit
                </button>
              </div>
            )}
            {!showbegin && !page8 && page9 && "Congulalation finish survey!!!"}
          </div>
        </div>
      </div>
    </div>
  );
}
