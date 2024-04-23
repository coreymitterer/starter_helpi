import OpenAIAPI from "openai";
import { DetailedQuiz } from "./DetailedQuiz";
    const localKey = localStorage.getItem("MYKEY") || '';
    const openAI = new OpenAIAPI(
        {apiKey: localKey, dangerouslyAllowBrowser: true}
    );

    async function callOpenAIDetailed(QUESTIONS: string[], userResponses: string[], Survey: string[] ){
        const questionsString = QUESTIONS.join('\n');
        const responsesString = userResponses.join('\n'); 
        const surveyString = Survey.join('\n');
        const completion = await openAI.chat.completions.create({
            messages: [
            {
                role: "system",
                content: "You will be provided with a  Survey with questions and repsonses to each question as well as a list of questions of answers supplied seperatly. your job is to turn these questions and answers into a list of 5 different carrerr paths this user could go into based off there answers. Format this into a JSON file",
            },
            { role: "user", content: 'Here are the survey Questions and answers ' + surveyString + ' Here are the Questions deliminated by the two curly braces: {{ ' + questionsString + ' }} and here are the answers deliminated by two square braces [[ '+ responsesString + ']]' },
            ],
            model: "gpt-4",
        });
        console.log(completion.choices[0].message.content);
    }
    async function callOpenAIBasic(QUESTIONS: string[], userResponses: string[] ){
        const questionsString = QUESTIONS.join('\n'); // Join questions with newline separator
        const responsesString = userResponses.join('\n'); // Join responses with newline separator
        const completion = await openAI.chat.completions.create({
            messages: [
            {
                role: "system",
                content: "You will be provided with a list of questions of answers supplied seperatly. your job is to turn these questions and answers into a list of 5 different carrerr paths this user could go into based off there answers. Format this into a JSON file",
            },
            { role: "user", content: 'Here are the Questions deliminated by the two curly braces: {{ ' + questionsString + ' }} and here are the answers deliminated by two square braces [[ '+ responsesString + ']]' },
            ],
            model: "gpt-4",
        });
        console.log(completion.choices[0].message.content);
    }

