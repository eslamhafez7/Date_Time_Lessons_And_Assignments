/*
    [Get Date And Time] L160
        getTime() => Number of milliseconds
        getDate() => Day of the month
        getFullYear()
        getMonth() => Zero based
        getDay() => Day of the week
        getHours()
        getMinutes()
        getSeconds()
*/

// let dateNow = new Date();
// let myBirth = new Date("dec, 13, 2002");
// let diff = dateNow - myBirth;
// console.log(diff / 1000 / 60 / 60 / 24 / 365); // 20.541334264808473

// console.log(dateNow);
// console.log(dateNow.getTime());
// console.log(dateNow.getDate());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());

let datenow = new Date();

let birthDay = new Date("Dec, 13, 2002");

let dateDiff = datenow - birthDay;

let myAge = dateDiff / 1000 / 60 / 60 / 24 / 365;
console.log(myAge.toFixed(1));


console.log(datenow.getTime());
console.log(datenow.getDate());
console.log(datenow.getFullYear());
console.log(datenow.getMonth());
console.log(datenow.getDay());
console.log(datenow.getHours());
console.log(datenow.getMinutes());
console.log(datenow.getSeconds());
console.log(datenow.getTimezoneOffset());
console.log(datenow.getUTCDate());
console.log(datenow.getUTCMinutes());