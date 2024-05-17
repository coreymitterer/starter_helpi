import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

/*
Interface used for the Survey component.  This is used to be able to pass the values
obtained from the Survey to the Detailed Questions Quiz, as well as checking the status of the survey,
specifically, what will happen when the survey is completed.
*/
interface SurveyProps {
  onCompletion: () => void;
  setIncome: (income: number) => void;
  setEducation: (education: string) => void;
}

const EDUCATIONS = ["None", "Trade School", "Bootcamp", "Associates", "Bachelors", "Masters", "Doctorate"];
const DEFAULT_EDUCATION = EDUCATIONS[0];

/*
This function is used to load the actual survey.  When the user clicks on the button, 
it will load the survey by setting setVisible to true.  Otherwise, the survey will stay hidden.
*/
function RevealButton({ setVisible }: { setVisible: (visible: boolean) => void }): JSX.Element {
  return (
    <div>
      <Button className="button-take-survey" onClick={() => setVisible(true)}>
        Take Survey!
      </Button>
    </div>
  );
}
/*
Function to display the main Survey component.
*/
const Survey: React.FC<SurveyProps> = ({ onCompletion, setIncome, setEducation }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState(165000);

  function changeSliderValue(event: ChangeEvent<HTMLInputElement>): void {
    setSliderValue(parseInt(event.target.value));
    setIncome(parseInt(event.target.value));
  }

  function updateEducation(event: ChangeEvent<HTMLSelectElement>): void {
    setEducation(event.target.value);
  }

  function handleSubmission(): void {
    onCompletion(); 
  }

  return (
    /*
    All of the HTML that is returned from the Survey component.  
    Utilizes the React Form and Button from Bootstrap.  Will save
    the users data of their preferred education and income, then is sent
    to the Detailed Quiz by using the interface defined above.
    */
    <div className="survey-container">
      <div>
        <h1>Take a quick survey before taking the Detailed Quiz!</h1>
      </div>
      {!visible && <RevealButton setVisible={setVisible} />}
      {visible && (
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group controlId="PreferredLevelOfEducation">
            <Form.Label>What is the highest education you would be willing to do?</Form.Label>
            <Form.Select defaultValue={DEFAULT_EDUCATION} onChange={updateEducation}>
              {EDUCATIONS.map((education) => (
                <option key={education} value={education}>
                  {education}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="IncomePreference">
            <Form.Label>Preferred Income:</Form.Label>
            <Form.Range min={30000} max={300000} value={sliderValue} onChange={changeSliderValue} />
            <Form.Control type="number" value={sliderValue} onChange={changeSliderValue} />
          </Form.Group>
          <Button type="button" className="button-submit" onClick={handleSubmission}>Submit</Button>
        </Form>
      )}
    </div>
  );
};

export default Survey;