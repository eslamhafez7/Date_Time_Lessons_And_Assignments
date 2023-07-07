/*
    [Formatting Date And Time] L162
        new Date(Timestamp)
        new Date(Date String)
        new Date(Numeric Values)

    Format {
        "Oct 25 1982"
        "10/25/1982"
        "1982/10/25" => ISO 
        "1982 10"
        "1982"
        "82"
        1982, 9, 25, 2, 10, 0
        1982, 9, 25
        1982,-10-25T06:10:00Z
    }
    Date.parse("string")
*/
console.log(Date.parse("Oct, 25, 82"));
console.log("#".repeat(20));

let date1 = new Date(0);
console.log(date1);

console.log("#".repeat(20));

let date2 = new Date(404344800000);
console.log(date2);


let date3 = new Date("10/25/1982");
console.log(date3);

console.log("#".repeat(20));

let date4 = new Date("1982/10/25");
console.log(date4);

let date5 = new Date("1982");
console.log(date5);

let date6 = new Date("82");
console.log(date6);

let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);


let date8 = new Date("1982-10-25T06:10:00Z");
console.log(date8);

console.log(Date.parse("Dec, 13, 2002"));

let date = new Date(1039730400000);
console.log(date)
date = date / 1000 / 60 / 60 / 24 / 365;
console.log(date)


let now = new Date();
let mb = new Date("Dec, 13, 2002");
console.log(now)
console.log(mb)
let dif = now - mb;
console.log(dif / 1000 / 60 / 60 / 24 / 365);
