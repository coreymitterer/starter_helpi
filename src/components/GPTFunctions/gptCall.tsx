import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import OpenAIAPI from "openai";

export function GPT(): JSX.Element {
    const [apiKey, setApiKey] = useState(''); // State to store the API key
    const [input, setInput] = useState(''); // State to store user input
    const [output, setOutput] = useState(''); // State to store the response from OpenAI

    useEffect(() => {
        const storedKey = localStorage.getItem("MYKEY") || '';
        if (!storedKey) {
            console.error("API Key is missing. Please add your API key.");
        } else {
            setApiKey(storedKey);
        }
    }, []);
    

    async function callOpenAI() {
        if (!apiKey) {
            console.error("API Key is not set. Unable to make API calls.");
            return;
        }
        
        const openAI = new OpenAIAPI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
        
        try {
            const completion = await openAI.chat.completions.create({
                model: "gpt-4",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: input }
                ],
            });
            console.log(completion.choices[0].message.content);
            setOutput(completion.choices[0].message.content || ''); // Save the output in state with a default value of an empty string
        } catch (error) {
            console.error("Error calling OpenAI:", error);
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value); // Update the input state when user types in the input box
    }

    return (
        <div>
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
