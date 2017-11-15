// current forecast of the day
const kelvin = prompt('what is the kelvin temperature today?');

// this converts kelvin into celsius
const celsius = kelvin - 273;

// conversion into farenheit, rounded to avoid decimals
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temparature is ${fahrenheit}`);
