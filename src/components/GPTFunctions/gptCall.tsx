import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import OpenAIAPI from "openai";
 
export function GPT(): JSX.Element {
    const [input, setInput] = useState(''); // State to store user input
    const [output, setOutput] = useState(''); // State to store the response from OpenAI
    const [key, setKey] = useState<string>("");
    async function callOpenAI() {
        const openai = new OpenAIAPI({apiKey: key, dangerouslyAllowBrowser: true})
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system",content: "You will be provided with a list of questions of answers supplied seperatly. your job is to turn these questions and answers into a list of 5 different carrerr paths this user could go into based off there answers. Format this into a JSON file" },
                { role: "user", content: 'Here are the Questions deliminated by the two curly braces: {{  + questionsString +  }} and here are the answers deliminated by two square braces [[ + responsesString + ]]'  }
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

    return (
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
            {output && <p>Response: {output}</p>} {/* Display the response below the button */}
        </div>
    );
}

export default GPT;
