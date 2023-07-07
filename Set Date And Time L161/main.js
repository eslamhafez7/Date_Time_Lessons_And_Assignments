/*
    [Set Date And Time] L161
        setTime (milliseconds)
        setDate() => Day of the month [negative or positive]
        setFullYear(year, month => optional [0-11], day => optional [1-31])
        setMonth(month [0-11], day => optional [1-31]) [negative or positive]
        setHours(hours [0-23], minutes => optional [0-59], seconds => optional [0-59], MS => Optional [0-999])
        setMinutes(minutes => [0-59], seconds => optional [0-59], MS => optional [0-999])
        setseconds(seconds [0, 59], MS => optional [0-999])
*/

let dateNow = new Date();
console.log(dateNow)

console.log("#".repeat(20));

// dateNow.setTime(0);
// console.log(dateNow);
// console.log("#".repeat(20));

// dateNow.setTime(10000);
// console.log(dateNow);
// console.log("#".repeat(20));

// dateNow.setDate(-1);
// console.log(dateNow);
// console.log("#".repeat(20));

// dateNow.setFullYear(2010, 10, 13);
// console.log(dateNow);
// console.log("#".repeat(20));

// dateNow.setMonth(11, 10);
// console.log(dateNow);
// console.log("#".repeat(20));

// dateNow.setHours(2, 12 , 50, 999);
// console.log(dateNow);
// console.log("#".repeat(20));

// dateNow.setMinutes(34, 34, 443);
// console.log(dateNow);
// console.log("#".repeat(20));

// dateNow.setSeconds(100);
// console.log(dateNow);
// console.log("#".repeat(20));




console.log(dateNow.getDate()); // day of the month 
console.log(dateNow.getDay()); // day of the week