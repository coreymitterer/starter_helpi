import React, { useState } from "react";
import "../question.css";
export function Question1() {
  const [page1, setpage1] = useState(true);
  return (
    <div>
      <div>
        {page1 && (
          <h1 className="Question1">
            Q1:I like working in a city and am willing to live in a highly
            populated area for work
          </h1>
        )}
      </div>
      <div className="answer1">
        {page1 && (
          <div>
            A.Strongly Agree 😃
            <input type="radio" name="Strongly Agree" value="4" />
          </div>
        )}
        {page1 && (
          <div>
            B.Agree 😀
            <input type="radio" name="Agree" value="3" />
          </div>
        )}
        {page1 && (
          <div>
            C.Neutral 😐
            <input type="radio" name="Neutral" value="2" />
          </div>
        )}
        {page1 && (
          <div>
            D.Disagree 😒
            <input type="radio" name="Disagree" value="1" />
          </div>
        )}
        {page1 && (
          <div>
            E.Strongly Disagree 😔
            <input type="radio" name="Strongly Disagree" value="0" />
          </div>
        )}
      </div>
      {/* {page1 && (
        <button
          onClick={() => {
            setpage1(false);
          }}
        >
          Next
        </button>
      )} */}
    </div>
  );
}

export default Question1;
