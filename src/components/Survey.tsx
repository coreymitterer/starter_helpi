import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

interface SurveyProps {
  onCompletion: () => void; // Add a prop for the completion callback
}

const EDUCATIONS = ["None", "Associates", "Bachelors", "Masters", "Doctorate"];
const DEFAULT_EDUCATION = EDUCATIONS[0];

function RevealButton({ setVisible, visible }: { setVisible: (visible: boolean) => void; visible: boolean }): JSX.Element {
  return (
    <div>
      <Button className="button" onClick={() => setVisible(!visible)}>
        {visible ? 'Close' : 'Survey'}
      </Button>
    </div>
  );
}

const Survey: React.FC<SurveyProps> = ({ onCompletion }) => {
  const [education, setEducation] = useState<string>(DEFAULT_EDUCATION);
  const [visible, setVisible] = useState<boolean>(false);
  const [income, setIncome] = useState<number>(0);

  // Handle education level selection
  function updateEducation(event: ChangeEvent<HTMLSelectElement>): void {
    setEducation(event.target.value);
  }

  // Handle income preference input
  function updateIncome(event: ChangeEvent<HTMLInputElement>): void {
    setIncome(parseInt(event.target.value));
  }

  // Handle survey submission
  function handleSubmission(): void {
    onCompletion(); // Call the completion callback
    setVisible(false); // Optionally close the survey form
  }

  return (
    <div>
      <RevealButton setVisible={setVisible} visible={visible} />
      {visible && (
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group controlId="PreferredLevelOfEducation">
            <Form.Label>What is the highest education you would be willing to do?</Form.Label>
            <Form.Select value={education} onChange={updateEducation}>
              {EDUCATIONS.map((education) => (
                <option key={education} value={education}>
                  {education}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="IncomePreference">
            <Form.Label>Preferred Income:</Form.Label>
            <Form.Control type="range" min={0} max={100000} value={income} onChange={updateIncome} />
            <Form.Label>{income.toLocaleString()}</Form.Label>
          </Form.Group>
          <Button type="button" onClick={handleSubmission}>Submit</Button>
        </Form>
      )}
    </div>
  );
};

export default Survey;
