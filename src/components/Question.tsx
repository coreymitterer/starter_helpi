import { useState } from "react";
import "./Question.css";
import { Form } from "react-bootstrap";

const Qquestion = [
  {
    Id: "1",
    question: "You should ______ swimming.",
    A: "start up",
    B: "get off ",
    C: "take up",
    D: "take off",
  },
  {
    Id: "2",
    question: "She ______ me to go to school.",
    A: "said",
    B: "told ",
    C: "suggested",
    D: "made",
  },
  {
    Id: "3",
    question: "She looks ______ she's going to be sick.",
    A: "as if",
    B: "as",
    C: "like",
    D: "if",
  },
];
// const answer = ["take up", "told", "as if"];
export function LQuestion() {
  const QS = Qquestion;
  const [dropdown, setDropdown] = useState("take up");
  const [isCheck, setChecked] = useState(false);
  const [radio, setRadio] = useState("take up");

  const format = QS.map((Q) => <form className="Q1"></form>);
  return (
    <>
      <form className="question">
        <h1>Selection is : {dropdown}</h1>
        <h1>Checkbox is :{isCheck ? "True" : "Fasle"}</h1>
        <h1>Q1 {QS[0].question}</h1>
        <select
          value={dropdown}
          onChange={(e) => {
            setDropdown(e.target.value);
          }}
        >
          <option value="start up">A:start up</option>
          <option value="get off">B:get off </option>
          <option value="take up">C:take up</option>
          <option value="take off">D:take off</option>
        </select>
        <br />
        <label>A:start up</label>
        <input type="checkbox" />
        <label>B:get off</label>
        <input type="checkbox" />
        <label>C:take up</label>
        <input
          type="checkbox"
          checked={isCheck}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
        <label>D:take off</label>
        <input type="checkbox" />
      </form>
      <form className="question">
        <h1>Q2 {QS[1].question}</h1>
        <br />
        <label>A:said</label>
        <input type="checkbox" />
        <label>B:told</label>
        <input
          type="checkbox"
          checked={isCheck}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
        <label>C:suggested</label>
        <input type="checkbox" />
        <label>D:made</label>
        <input type="checkbox" />
      </form>
      <form className="question">
        <h1>Q3 {QS[2].question}</h1>
        <br />
        <label>A:as if</label>
        <input
          type="checkbox"
          checked={isCheck}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
        <label>B:as</label>
        <input type="checkbox" />
        <label>C:like</label>
        <input type="checkbox" />
        <label>D:if</label>
        <input type="checkbox" />
      </form>
    </>
  );
}
