import "../index.css";
import { useEffect, useState } from "react";
import { Button, Form, ProgressBar, Spinner } from "react-bootstrap";
import BaseQuestion from "./BaseQuestion";
import OpenAi from "openai";

const QUESTIONS: string[] = BaseQuestion.map(question => question.question);
const DEFAULT_QUESTION_INDEX: number = 0;

interface BasicString {
    setReports: (newString: string) => void;
}

// DFI: number = 0;
export function BasicQuiz({setReports}: BasicString): JSX.Element {
    const [output, setOutput] = useState<string>("");
    const [questionIndex, setQuestionIndex] = useState<number>(DEFAULT_QUESTION_INDEX);
    const [userResponses, setUserResponses] = useState<string[]>(new Array(QUESTIONS.length).fill(''));
    const [apiKey, setApiKey] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
    const storedKey = localStorage.getItem('MYKEY');  // Retrieve the API key from local storage
    if (storedKey !== null) {
        setApiKey(JSON.parse(storedKey));  // Parse and set the API key to state
    }
  }, []);
    //Goes to next question in Detailed Quiz
    function nextQuestion(): void {
        setQuestionIndex(questionIndex + 1);
    }
    //Goes to previous question in Detailed Quiz
    function prevQuestion(): void {
        setQuestionIndex(questionIndex - 1);
    }
    //Goes to the index of the Question number and changes the value of the given questions to what the user answers
    function changeUserResponse(event: React.ChangeEvent<HTMLInputElement>): void {
        const updatedResponses: string[] = [...userResponses];
        updatedResponses[questionIndex] = event.target.value;
        setUserResponses(updatedResponses);
    }
    //Makes an Async call to GPT fall containing the questions and answers supplied from the user after they take the detailed quiz and sputs out a specific output
    async function callOpenAI() {
        setIsLoading(true);
        const openai = new OpenAi({apiKey: apiKey, dangerouslyAllowBrowser: true});
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You will be provided with a list of questions and answers, your job is to turn these questions and answers into 5 different career options with the job title and a short description of each career. Try to make them slightly differnet everytime and in a random order You will format these 5 careers into a Json file and only a Json format where the Job title should be under the name {title} and the description should be called {description}" },
                { role: "user", content: "Here is a list of questions: " + QUESTIONS.join(", ") + " And here is the combined output of answers: " + userResponses.join(', ')}
            ],
        });
        //Puts the output right under the submit button
        setOutput(completion.choices[0]?.message.content || ""); // Handle null value by providing a default value of an empty string
        console.log(output)
        setReports(completion.choices[0]?.message.content || "");
        setIsLoading(false);
    }

  return (
      //All of the HTML that will be returned for detailed Quiz including Progress bar Prev and Next question, Submit Button as well as the Text box for each questions response
      <div className="quiz-text">
        <p>
            {QUESTIONS.length - questionIndex === 1 ? 
            `${QUESTIONS.length - questionIndex} Question Left` : 
            `${QUESTIONS.length - questionIndex} Questions Left`}
        </p>
      <ProgressBar 
          now={(questionIndex + 1) / QUESTIONS.length * 100}
          label={`${Math.floor(((questionIndex + 1)/QUESTIONS.length)*100)}%`}
        />
        <Form.Label>{QUESTIONS[questionIndex]}</Form.Label>
      <div className="quiz-answers">
        <Form.Check
            type="radio"
            name="Agreement"
            onChange={changeUserResponse}
            id="Agreement-check-strongly-agree"
            label="Strongly Agree"
            value="strongly agree"
            checked={userResponses[questionIndex] === "strongly agree"}
        />
        <Form.Check
            type="radio"
            name="Agreement"
            onChange={changeUserResponse}
            id="Agreement-check-agree"
            label="Agree"
            value="agree"
            checked={userResponses[questionIndex] === "agree"}
        />
        <Form.Check
            type="radio"
            name="Agreement"
            onChange={changeUserResponse}
            id="Agreement-check-Neutral"
            label="Neutral"
            value="neutral"
            checked={userResponses[questionIndex] === "neutral"}
        />
        <Form.Check
            type="radio"
            name="Agreement"
            onChange={changeUserResponse}
            id="Agreement-check-disagree"
            label="Disagree"
            value="disagree"
            checked={userResponses[questionIndex] === "disagree"}
        />
        <Form.Check
            type="radio"
            name="Agreement"
            onChange={changeUserResponse}
            id="Agreement-check-strongly-disagree"
            label="Strongly Disagree"
            value="strongly disagree"
            checked={userResponses[questionIndex] === "strongly disagree"}
        />
      </div>
      <div>
      <Button 
            type="button"
            className="prevButton"
            onClick={prevQuestion}
            disabled={questionIndex === 0}>
                <span className="prevButton-span">Back</span>
        </Button>
        <Button 
            type="button"
            className="nextButton"
            onClick={nextQuestion}
            disabled={questionIndex === QUESTIONS.length - 1 || userResponses[questionIndex] === ""}>
                <span className="prevButton-span">Next</span>
        </Button>
        <br></br>
        <Button 
            type="button"
            className="submitButton"
            onClick={callOpenAI}
            disabled={userResponses.includes('') || questionIndex !== QUESTIONS.length - 1}>
                <span className="submitButton-span">Submit</span>
        </Button>
        <br></br>
        {isLoading && (
            <>
                <p>Processing Results...</p>
                <br />
                <Spinner animation="border" role="status" />
            </>
        )}
      </div>
  </div>
  );
}