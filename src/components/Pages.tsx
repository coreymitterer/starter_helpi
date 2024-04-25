import React, { useState } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../index.css";
import Survey from "./Survey";
import { DetailedPage } from "./DetailedPage";
import OpenAIAPI from "openai";
export function Pages(): JSX.Element {
    const [isHome, setHome] = useState<boolean>(true);
    const [isBasic, setBasic] = useState<boolean>(false);
    const [isDetailed, setDetailed] = useState<boolean>(false);
    const [input, setInput] = useState(''); // State to store user input
    const [output, setOutput] = useState(''); // State to store the response from OpenAI
    const [key, setKey] = useState<string>("");

    const basicTooltip = (
        <Tooltip id="tooltip">
          Shorter Quiz For Your Dream Career
        </Tooltip>
    );

    const detailedTooltip = (
        <Tooltip id="tooltip">
          Longer Quiz To Find Your Perfect Fit 
        </Tooltip>
    );

    const homeTooltip = (
        <Tooltip id="tooltip">
          Home Is Where The Career Quizzes Are
        </Tooltip>
    );

    async function callOpenAI() {
        const openai = new OpenAIAPI({apiKey: key, dangerouslyAllowBrowser: true})
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: input }
            ],
        });
        console.log(completion.choices[0].message.content);
        setOutput(completion.choices[0].message.content || '');
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value); // Update the input state when user types in the input box
    }

    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        const newKey = event.target.value;
        console.log("New API Key:", newKey); // Debug to see if the value is updating correctly
        setKey(newKey);
    }

    function handleSubmit() {
        localStorage.setItem("MYKEY", JSON.stringify(key));
        console.log("API Key Submitted:", key); // Debug to see if the value is updating correctly
    }

    function updateSetHome(): void {
        setHome(true);
        setBasic(false);
        setDetailed(false);
    }

    function updateSetBasic(): void {
        setHome(false);
        setBasic(true);
        setDetailed(false);
    }

    function updateSetDetailed(): void {
        setHome(false);
        setBasic(false);
        setDetailed(true);
    }

    return (
        <div>
            <div className="nav">
                <div>
                    <OverlayTrigger
                        trigger="hover"
                        placement="bottom"
                        overlay={basicTooltip}
                    >
                        <Button
                            type="button"
                            className="button"
                            onClick={updateSetBasic}
                            disabled={isBasic}
                        >
                            <span className="button-span">Basic</span>
                        </Button>
                    </OverlayTrigger>
                </div>
                <div>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={homeTooltip}
                    >
                        <Button
                            className="button"
                            onClick={updateSetHome}
                            disabled={isHome}
                        >
                            <span className="button-span">Home</span>
                        </Button>
                    </OverlayTrigger>
                </div>
                <div>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 100, hide: 100 }}
                        overlay={detailedTooltip}
                    >
                        <Button className="button" onClick={updateSetDetailed} disabled={isDetailed}>Detailed</Button>
                    </OverlayTrigger>
                </div>
                <div>
                    <Survey></Survey>
                </div>
            </div>

            {isHome && (
                <div className="home">
                    <h1>Home</h1>
                    <p>Welcome to the home page!</p>
                    <p>Corey Mitterer</p>
                    <p>Ian Duffy</p>
                    <p>Logan Ponik</p>
                    <p>Junpuyin Wei</p>
                </div>
            )}
            {isBasic && (
                <div className="basic">
                    <h1>Basic</h1>
                    <p>Welcome to the basic page!</p>
                    <p>Discover your career preferences and strengths with our Basic Career Quiz! Answer simple questions about your interests, skills, and goals to gain insights into potential career paths that align with your personality and aspirations. This quiz provides a starting point for your career journey.</p>
                </div>
            )}
            {isDetailed && (
              <div>
              <DetailedPage/>
              <DetailedPage></DetailedPage>
              </div>
            )}

            <center>
                <div>
                    <Form>
                        <Form.Label>API Key:</Form.Label>
                        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} size="sm" style={{ width: "200px" }} />
                        <br></br>
                        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
                    </Form>
                    <Form.Control
                        type="text"
                        placeholder="Ask a question..."
                        value={input}
                        onChange={handleInputChange}
                        style={{ margin: "10px 0" }}
                    />
                    <Button type="button" className="button" onClick={callOpenAI}>Ask GPT</Button>
                    {output && <p>Response: {output}</p>}
                </div>
            </center>
        </div>
    );
}
