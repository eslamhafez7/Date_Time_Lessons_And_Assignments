/*
    [Date And Time - Introduction] L159
    => Date Constructor [let date = new Date();]

    Static Methods {
        Date.now()
    }
    => To track time you need a starting point
    => Unix Timestamp(الطابع الزمني ليونكس) or Epoch time: Represents time as number of seconds 
    elapsed since 1 janunary 1970 at 00:00:00 UTC
    => UTC stands for Coordinated Universal Time
    => UTC : It is a standard time reference used as a basis for timekeeping
    and serves as the primary time standard for many systems worldwide.
    => Time Zone Offset: Represents the difference in hours and minutes between the local time and
    UTC.
    Date and Time Components: {
        => Year: Represents the calendar year(2023)
        => Month: January to December (1-12)
        => Day: Day of month ranging from 1 to 31
        => Hour: The hour within the day on a 24-hour clock (0-23) or a 12-hour clock with AM/PM notation.
        => Minute: minutes within an hour, ranging from 0 to 59
        => Seconds: seconds within a minute, ranging from 0 to 59
        => Millisecond: fractions of a second, ranging from 0 to 999
    }
*/

// let currentDate  = new Date();
// console.log(currentDate);

// console.log(`milliseconds ${Date.now()}`); // number of milliseconds from 1970 until today

// let seconds = Date.now() / 1000; 
// console.log(`seconds ${seconds}`); // number of seconds

// let minutes = seconds / 60; 
// console.log(`minutes ${minutes}`); // number of seconds

// let hours = minutes / 60;
// console.log(`hours ${hours}`); // number of hours

// let days = hours / 24;
// console.log(`days ${days}`); // number of days

// let years = days / 365;
// console.log(`years ${years}`); // number of years

// let months = days / 30;
// console.log(`months ${months}`); // number of months



let dateNow = new Date();
console.log(dateNow);

console.log(Date.now()); // date in milliseconds

let seconds = Date.now() / 1000;
console.log(seconds);

let minutes = seconds / 60;
console.log(minutes);

let hours = minutes / 60;
console.log(hours);

let days = hours / 24;
console.log(days);

let years = days / 365;
console.log(years);

let months = days / 30;
console.log(months)

console.log(Date.now() / 1000 / 60 / 60 / 24 / 365);
