let myName = ["Joy", "Shen"];

//use random() to get a randome number between 0 and 1, * length, using floor() to ground to neareat integer
let randomIndex = Math.floor(Math.random() * myName.length);

let randomString = myName[randomIndex];

console.log(randomString);