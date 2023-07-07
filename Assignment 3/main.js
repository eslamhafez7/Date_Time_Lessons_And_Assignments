/*
    [Assignment 3]
*/

let date = new Date();
date.setDate(0);
console.log(date);

let monthNames = [
    'January', 'February', 'March',
    'April', 'May', `Jun`, 'July',
    'August', 'September', 'October',
    'November', 'December'
];

console.log(`Previous Month Is ${monthNames[date.getMonth()]} And Last Day Is ${date.getDate()}`);