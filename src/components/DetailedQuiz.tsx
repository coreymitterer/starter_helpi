import React, { useState, useEffect } from 'react';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import detailedQuestionBank from './DetailedQuestionBank';
import OpenAi from "openai";



const QUESTIONS: string[] = detailedQuestionBank.map(question => question.question);
const TOPICS: string[] = detailedQuestionBank.map(question => question.topic);
const DEFAULT_QUESTION_INDEX: number = 0;

export function DetailedQuiz(): JSX.Element {
    const [output, setOutput] = useState<string>("");
    const [questionIndex, setQuestionIndex] = useState<number>(DEFAULT_QUESTION_INDEX);
    const [userResponses, setUserResponses] = useState<string[]>(new Array(QUESTIONS.length).fill(''));
    const [apiKey, setApiKey] = useState('');

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
    function changeUserResponse(event: React.ChangeEvent<HTMLTextAreaElement>): void {
        const updatedResponses: string[] = [...userResponses];
        updatedResponses[questionIndex] = event.target.value;
        setUserResponses(updatedResponses);
    }
    //Makes an Async call to GPT fall containing the questions and answers supplied from the user after they take the detailed quiz and sputs out a specific output
    async function callOpenAI() {
        const openai = new OpenAi({apiKey: apiKey, dangerouslyAllowBrowser: true});
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: "I am going to provide you with answers to those questions.  After taking these questions and their respective answers, I need you to give me 5 career choices based on these responses.  Here is a list of questions: " + QUESTIONS.join(", ") + " And here is the combined output of answers: " + userResponses.join(', ') + " put this response in a Json format"}
            ],
        });
        //Puts the output right under the submit button
        setOutput(completion.choices[0]?.message.content || ""); // Handle null value by providing a default value of an empty string
        console.log(output)
    }



    return (
        //All of the HTML that will be returned for detailed Quiz including Progress bar Prev and Next question, Submit Button as well as the Text box for each questions response
        <div>
            <ProgressBar 
                now={(questionIndex + 1) / QUESTIONS.length * 100}
                label={(QUESTIONS.length - questionIndex === 1) ? `${QUESTIONS.length - questionIndex} Question Left` : `${QUESTIONS.length - questionIndex} Questions Left`}/>
            <h3>Topic: {TOPICS[questionIndex]}</h3>
            <div>
                <Form.Group controlId="formDetailedQuestion">
                    <Form.Label>{QUESTIONS[questionIndex]}</Form.Label>
                    <Form.Control 
                        as="textarea"
                        rows={3}
                        placeholder="Enter Response..."
                        value={userResponses[questionIndex]} 
                        onChange={changeUserResponse} />
                </Form.Group>
                <Button 
                    type="button"
                    className="prevButton"
                    onClick={prevQuestion}
                    disabled={questionIndex === 0}>
                        <span className="prevButton-span">Previous Question</span>
                </Button>
                <Button 
                    type="button"
                    className="nextButton"
                    onClick={nextQuestion}
                    disabled={questionIndex === QUESTIONS.length - 1 || userResponses[questionIndex] === ""}>
                        <span className="prevButton-span">Next Question</span>
                </Button>
            </div>
            <center>
                <Button 
                    type="button"
                    className="submitButton"
                    onClick={callOpenAI}
                    disabled={userResponses.includes('') || questionIndex !== QUESTIONS.length - 1}>
                        <span className="submitButton-span">Submit</span>
                </Button>
                <div>
                    {output && <p>Possible Career Choices: { output }</p>}
                </div>
            </center>
        </div>
    );

}


