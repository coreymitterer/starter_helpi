import OpenAIAPI from "openai";


const localKey = localStorage.getItem("MYKEY") || '';
const openAI = new OpenAIAPI(
    {apiKey: localKey, dangerouslyAllowBrowser: true}
);

async function callOpenAI(){
    const completion = await openAI.chat.completions.create({
        messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}],
        model: "gpt-4",
      });
      console.log(localKey)
    
      console.log(completion.choices[0]);
    }
callOpenAI()