/*
    [Assignment 5]
*/

let start = performance.now();


for (let i = 0; i  < 9999; i++) {
    document.write(`<div>${i}</div>`);
}

let end = performance.now();

let duration = end - start;
console.log(`Loop Took ${(duration).toFixed(0)} Milliseconds.`);