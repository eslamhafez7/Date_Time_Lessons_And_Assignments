/*
    [Assignment 1]
*/

let currentDate = new Date();
let mybirth = new Date("Dec 13 2002");
let myAge = currentDate - mybirth;

console.log(`Milliseconds ${(myAge).toFixed(0)}`);
console.log(`Seconds ${(myAge / 1000).toFixed(0)}`);
console.log(`Minutes ${(myAge / 1000 / 60).toFixed(0)}`);
console.log(`Hours ${(myAge / 1000 / 60 / 60).toFixed(0)}`);
console.log(`Days ${(myAge / 1000 / 60 / 60 / 24).toFixed(0)}`);
console.log(`Months ${(myAge / 1000 / 60 / 60 / 24 / 30).toFixed(0)}`);
console.log(`Years ${(myAge / 1000 / 60 / 60 / 24 / 365).toFixed(0)}`);