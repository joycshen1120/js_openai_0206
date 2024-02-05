import { gptPrompt } from "./ai/openai.js";

const answer1 = prompt("What is the first city outside of North Amerrica that has Startbucks?");
const answer2 = prompt("what is the fifth biggest country in the world?")
const answer3 = prompt("what was the national flower of China?")

const result = await gptPrompt(
    `The user answered ${answer1} to "What is the first city outside of North Amerrica that has Startbucks?";
    answered ${answer2} to "what is the fifth biggest country in the world?";
    answered ${answer3} to "what was the national flower of China?";
    Based on the users' answers to the previous 3 questions, tell me just the number of questions they got correct. no need to evaluate, just the number.`
)

console.log(`\n${result}`);