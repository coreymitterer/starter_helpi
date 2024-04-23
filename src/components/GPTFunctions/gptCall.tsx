import OpenAIAPI from "openai";
import { Button } from "react-bootstrap";

export function GPT(): JSX.Element {
    const localKey = localStorage.getItem("MYKEY") || '';
    const openAI = new OpenAIAPI(
        {apiKey: localKey, dangerouslyAllowBrowser: true}
    );

    async function callOpenAI(){
        const completion = await openAI.chat.completions.create({
            messages: [
            {
                role: "system",
                content: "You are a helpful assistant designed to output JSON.",
            },
            { role: "user", content: "Who won the world series in 2020?" },
            ],
            model: "gpt-4",
        });
        console.log(completion.choices[0].message.content);
    }
    return(
        <Button
            type="button"
            className="button"
            onClick={callOpenAI}
        >
        </Button>
    );
}

export default GPT;
