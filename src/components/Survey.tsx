import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

interface RevealButtonProps {
  setVisible: (newVisibility: boolean) => void;
  visible: boolean;
}

function RevealButton({ setVisible, visible }: RevealButtonProps): JSX.Element {
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>
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

  function updateEducation(event: ChangeEvent<HTMLSelectElement>): void {
    setEducation(event.target.value);
  }

  return (
    <div>
      <RevealButton setVisible={setVisible} visible={visible} />
      {visible && (
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
      )}
    </div>
  );
}
