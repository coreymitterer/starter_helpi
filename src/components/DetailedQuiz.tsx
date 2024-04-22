import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import detailedQuestionBank from './DetailedQuestionBank';
import "../index.css";
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
            <h3>Topic: {TOPICS[questionIndex]}</h3>
            <div>
                <Form.Group className="mb-3" controlId="formDetailedQuestion">
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
                    onClick={prevQuestion}
                    disabled={questionIndex === 0}>
                        Previous Question
                </Button>
                <Button 
                    onClick={nextQuestion}
                    disabled = {questionIndex === QUESTIONS.length-1}>
                        Next Question
                </Button>
            </div>
        </div>
    );
}