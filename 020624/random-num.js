function getNum(min, max) {
    //make inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    //using formula: Math.random()*(b-a)+a;
    //use floor() to generate integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = getNum(1, 6);
console.log(randomNum);