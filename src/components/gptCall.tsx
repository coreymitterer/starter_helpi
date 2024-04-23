import OpenAIAPI from "openai";
import { DetailedQuiz } from "./DetailedQuiz";
import detailedQuestionBank from "./DetailedQuestionBank";
    const localKey = localStorage.getItem("MYKEY") || '';
    const openAI = new OpenAIAPI(
        {apiKey: localKey, dangerouslyAllowBrowser: true}
    );

    async function callOpenAIDetailed(){
        const completion = await openAI.chat.completions.create({
            messages: [
            {
                role: "system",
                content: "You will be provided with a list of questions of answers supplied seperatly. your job is to turn these questions and answers into a list of 5 different carrerr paths this user could go into based off there answers. Format this into a JSON file",
            },
            { role: "user", content: 'Here are the Questions deliminated by the two curly braces: {{ ' + 'Insert Questions here' + ' }} and here are the answers deliminated by two square braces [[ '+ 'Insert answers' + ']]' },
            ],
            model: "gpt-4",
        });
        console.log(completion.choices[0].message.content);
    }
    callOpenAIDetailed();

