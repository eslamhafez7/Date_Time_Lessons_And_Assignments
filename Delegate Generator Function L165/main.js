/*
    [Delegate Generator Function] L165
*/

function* generateNumbers () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
function* generateLetters () {
    yield "A";
    yield "B";
    yield "C";
    yield "D";
}
function* generateAll () {
    yield *generateNumbers();
    yield *generateLetters();
    yield *[10, 20, 30, 40]
}

let generator = generateAll();
console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

console.log("#".repeat(10));

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return("Done")); // to stop the generator

console.log("#".repeat(10));

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

console.log(generator.next());


