import { useState } from 'react';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import detailedQuestionBank from './DetailedQuestionBank';
import "../index.css";
import {GPT} from './GPTFunctions/gptCall';
const QUESTIONS: string[] = detailedQuestionBank.map(question => question.question);
const TOPICS: string[] = detailedQuestionBank.map(question => question.topic);
const DEFAULT_QUESTION_INDEX: number = 0;
export function DetailedQuiz(): JSX.Element {
    const [questionIndex, setQuestionIndex] = useState<number>(DEFAULT_QUESTION_INDEX);
    const [userResponses, setUserResponses] = useState<string[]>(new Array(QUESTIONS.length).fill(''));
    function nextQuestion(): void {
        setQuestionIndex(questionIndex + 1);
    }
    function prevQuestion(): void {
        setQuestionIndex(questionIndex - 1);
    }
    function changeUserResponse(event: React.ChangeEvent<HTMLInputElement>): void {
        const updatedResponses = [...userResponses];
        updatedResponses[questionIndex] = event.target.value;
        setUserResponses(updatedResponses);
    }
    return (
        <div>
            <ProgressBar 
                now={(questionIndex + 1) / QUESTIONS.length * 100}
                label={(QUESTIONS.length - questionIndex === 1) ? (QUESTIONS.length - questionIndex) + ' Question Left' : (QUESTIONS.length - questionIndex) + ' Questions Left'}/>
            <h3>Topic: {TOPICS[questionIndex]}</h3>
            <div>
                <Form.Group controlId="formDetailedQuestion">
                    <Form.Label>{QUESTIONS[questionIndex]}</Form.Label>
                    <Form.Control 
                        type="detailedAnswer"
                        as = "textarea"
                        rows = {3}
                        placeholder="Enter Response..."
                        value={userResponses[questionIndex]} 
                        onChange={changeUserResponse} />
                </Form.Group>
                <Button 
                    type = "button"
                    className = "prevButton"
                    onClick={prevQuestion}
                    disabled={questionIndex === 0}>
                        <span className="prevButton-span">Previous Question</span>
                </Button>
                <Button 
                    type = "button"
                    className = "nextButton"
                    onClick={nextQuestion}
                    disabled={questionIndex === QUESTIONS.length - 1 || userResponses[questionIndex] === ""}>
                        <span className="prevButton-span">Next Question</span>
                </Button>
            </div>
            <center>
            <Button 
                    type = "button"
                    className = "submitButton"
                    onClick={GPT}
                    disabled={questionIndex === QUESTIONS.length || userResponses[questionIndex] === ""}>
                        <span className="submitButton-span">Submit</span>
                </Button>
                </center>
        </div>
    );
}