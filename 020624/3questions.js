let correctNum = 0;

const answer1 = prompt("What is the first city outside of North Amerrica that has Startbucks?");
const answer2 = prompt("what is the fifth biggest country in the world?")
const answer3 = prompt("what was the national flower of China?")

if (answer1 == "tokyo" || answer1 == "Tokyo") {
    correctNum += 1;
} 
if (answer2 == "brazil" || answer2 =="Brazil") {
    correctNum += 1;
} 
if (answer3 == "the plum bossom" || answer3 == "plum blossom") {
    correctNum += 1;
}

console.log(correctNum);