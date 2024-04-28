import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
export default Survey;


interface RevealButtonProps {
  setVisible: (newVisibility: boolean) => void;
  visible: boolean;
}

function RevealButton({ setVisible, visible }: RevealButtonProps): JSX.Element {
  return (
    <div>
      <Button className = "button" onClick={() => setVisible(!visible)}>
        {visible ? 'Close' : 'Survey'}
      </Button>
    </div>
  );
}

const EDUCATIONS = ["None", "Associates", "Bachelors", "Masters", "Doctorate"];
const DEFAULT_EDUCATION = EDUCATIONS[0];

export function Survey(): JSX.Element {
  const [education, setEducation] = useState<string>(DEFAULT_EDUCATION);
  const [visible, setVisible] = useState<boolean>(false);
  const [income, setIncome] = useState<number>(0);
  //gets thew answer for education level 
  function updateEducation(event: ChangeEvent<HTMLSelectElement>): void {
    setEducation(event.target.value);
  }
  //Gets input from user for prefered income
  function updateIncome(event: ChangeEvent<HTMLInputElement>): void {
    setIncome(parseInt(event.target.value));
  }

  return (
    <div>
      <RevealButton setVisible={setVisible} visible={visible} />
      {visible && (
        <Form>
        <Form.Group controlId="Prefered level of Education">
          <Form.Label>What is the highest education you would be willing to do?</Form.Label>
          <Form.Select value={education} onChange={updateEducation}>
            {EDUCATIONS.map((education: string) => (
              <option key={education} value={education}>
                {education}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="incomePreference">
            <Form.Label>Preferred Income:</Form.Label>
            <Form.Control type="range" min={0} max={100000} value={income} onChange={updateIncome} />
            <Form.Label>{income.toLocaleString()}</Form.Label>
        </Form.Group>
        </Form>
      )}
    </div>
  );
}