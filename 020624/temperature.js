const temp = prompt("enter a temperature in Fahrenheit:");

//consulted google for definition of cold, warm, and hot
if(temp < 55) {
    console.log('cold');
} else if(temp > 55 && temp < 65) {
    console.log('warm');
} else if (temp > 65) {
    console.log('hot');
}