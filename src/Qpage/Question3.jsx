import React, { useState } from "react";
import "../question.css";
export default Question3;
// eslint-disable-next-line react-hooks/rules-of-hooks

export function Question3() {
  const [page2, setpage2] = useState(true);
  return (
    <div>
      <div className="Q2">
        {page2 && (
          <h1 className="Question1">
            Q3:I enjoy working in small groups on large projects I would rather
            work at a desk for the majority of my work
          </h1>
        )}
      </div>
      <div className="answer1">
        {page2 && (
          <div>
            A.Strongly Agree 😃
            <input type="radio" name="Strongly Agree" value="4" />
          </div>
        )}
        {page2 && (
          <div>
            B.Agree 😀
            <input type="radio" name="Agree" value="3" />
          </div>
        )}
        {page2 && (
          <div>
            C.Neutral 😐
            <input type="radio" name="Neutral" value="2" />
          </div>
        )}
        {page2 && (
          <div>
            D.Disagree 😒
            <input type="radio" name="Disagree" value="1" />
          </div>
        )}
        {page2 && (
          <div>
            E.Strongly Disagree 😔
            <input type="radio" name="Strongly Disagree" value="0" />
          </div>
        )}
      </div>
    </div>
  );
}
