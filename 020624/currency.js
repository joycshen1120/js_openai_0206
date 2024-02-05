//obstained 2:04pm 2/4/2024
const currency = 7.12;

function convertUSDtoCNY(usd) {
    return usd * currency;
}

let usd = prompt("enter a usd amount (just the number)");
const cny = convertUSDtoCNY(usd);
console.log(`${cny.toFixed(2)}` + ' Yuan');