import OpenAIAPI from "openai";
import Pages from "../components/Pages";

const openAI = new OpenAIAPI(
    {apiKey: API_KEY, dangerouslyAllowBrowser: true}
);

async function callOpenAI(){
    const completion = await openAI.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-4",
      });
    
      console.log(completion.choices[0]);
    }
callOpenAI()