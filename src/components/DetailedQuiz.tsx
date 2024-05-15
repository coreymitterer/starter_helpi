import React, { useState, useEffect } from 'react';
import { Button, Form, ProgressBar, Spinner } from 'react-bootstrap';
import detailedQuestionBank from './DetailedQuestionBank';
import OpenAi from "openai";

const QUESTIONS: string[] = detailedQuestionBank.map(question => question.question);
const TOPICS: string[] = detailedQuestionBank.map(question => question.topic);
const DEFAULT_QUESTION_INDEX: number = 0;


interface DetailedString {
    setReports: (DetailedString: string) => void;
    education: string;
    income : number;
}

export function DetailedQuiz({setReports, education, income}: DetailedString): JSX.Element {
    const [output, setOutput] = useState<string>("");
    const [questionIndex, setQuestionIndex] = useState<number>(DEFAULT_QUESTION_INDEX);
    const [userResponses, setUserResponses] = useState<string[]>(new Array(QUESTIONS.length).fill(''));
    const [apiKey, setApiKey] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const storedKey = localStorage.getItem('MYKEY');
        if (storedKey !== null) {
            setApiKey(JSON.parse(storedKey));
        }
    }, []);

    function nextQuestion(): void {
        setQuestionIndex(questionIndex + 1);
    }

    function prevQuestion(): void {
        setQuestionIndex(questionIndex - 1);
    }

    function changeUserResponse(event: React.ChangeEvent<HTMLTextAreaElement>): void {
        const updatedResponses: string[] = [...userResponses];
        updatedResponses[questionIndex] = event.target.value;
        setUserResponses(updatedResponses);
    }

    async function callOpenAI() {
        setIsLoading(true); // Set loading to true when submit button is clicked
        const openai = new OpenAi({apiKey: apiKey, dangerouslyAllowBrowser: true});
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You will be provided with a list of questions and answers, your job is to turn these questions and answers into 5 different career options with the job title and a short description of each career. You will format these 5 careers into a Json file and only a Json format" },
                { role: "user", content: "Here is a list of questions: " + QUESTIONS.join(", ") + " And here is the combined output of answers: " + userResponses.join(", ") + "Here are the survey results that the user also inputted, Their preferred level of education is" + education + ": and here is their preferred income: " + String(income)}
            ],
        });
        setIsLoading(false);
        setOutput(completion.choices[0]?.message.content || "");
        setReports(completion.choices[0]?.message.content || "");
        console.log(output)
    }

    return (
        //All of the HTML that will be returned for detailed Quiz including Progress bar Prev and Next question, Submit Button as well as the Text box for each questions response
        <div className='quiz-text'>
            <p>
                {QUESTIONS.length - questionIndex === 1 ? 
                `${QUESTIONS.length - questionIndex} Question Left` : 
                `${QUESTIONS.length - questionIndex} Questions Left`}
            </p>
            <ProgressBar 
                now={(questionIndex + 1) / QUESTIONS.length * 100}
                label={`${Math.floor(((questionIndex + 1)/QUESTIONS.length)*100)}%`}
            />
            <h3>Topic: {TOPICS[questionIndex]}</h3>
            <div>
                <Form.Group controlId="formDetailedQuestion">
                    <Form.Label>{QUESTIONS[questionIndex]}</Form.Label>
                    <Form.Control 
                        as="textarea"
                        rows={3}
                        placeholder="Enter Response..."
                        value={userResponses[questionIndex]} 
                        onChange={changeUserResponse} 
                    />
                </Form.Group>
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
            <center>
                <Button 
                    type="button"
                    className="submitButton"
                    onClick={callOpenAI}
                    disabled={userResponses.includes('') || questionIndex !== QUESTIONS.length - 1}
                >
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
            </center>
        </div>
    </div>
    );

}
