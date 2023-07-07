/*
    [Generator Function Introduction] L164
    Generators {
        => Generator function runs it's code when required
        => Generator function returns special object [Generator object]
        => Generators are itarable
        => use * to insure that you are using generator function [*function]
    }
*/

function* generateNumbers() {
    yield 1;
    console.log("Yield 1 is done")
    yield 2;
    yield 3;
    yield 4;
}
let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);

console.log("#".repeat(20))
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


console.log("#".repeat(20))
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

for (value of generateNumbers()) {
    console.log(value)
}
for (value of generator) {
    console.log(value) // it will print nothing because all yields are done
}



console.log("                      ");


function* gn() {
    yield 1;
    yield 2;
    yield 3;
}
let genr = gn();
console.log(genr.next());
console.log(genr.next());
console.log(genr.next());
console.log(genr.next());

console.log(genr.return(100).value);
console.log(genr.next().done);





// how to get your age (millisecnds, seconds, minutes, hours, dats)
let date = new Date();
let mydate = new Date("Dec 13 2002");
let diff = date - mydate;

console.log(`milliseconds ${diff}`);
console.log(`seconds ${(diff / 1000).toFixed(0)}`);
console.log(`minutes ${(diff / 1000 / 60).toFixed(0)}`);
console.log(`hours ${(diff / 1000 / 60 / 60).toFixed(0)}`);
console.log(`days ${(diff / 1000 / 60 / 60 / 24).toFixed(0)}`);
console.log(`months ${(diff / 1000 / 60 / 60 / 24 / 30).toFixed(0)}`);
console.log(`years ${(diff / 1000 / 60 / 60 / 24 / 365).toFixed(0)}`);

let number = 14;

for (let i = 0; i < 9; i++) {
  console.log(number);
  number += 140 * 6;
}
