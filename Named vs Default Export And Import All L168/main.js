/*
    [Named vs Default Export And Import All] L168
    => you can only have one default export per module. Having multiple default exports in a single
    module is not allowed
*/

let a = 10;

let arr = [1, 2, 3, 4, 5];

function saymsg () {
    return "Hello World";
}

export {a, arr, saymsg};

export default function msg() {
    return "This is Default Name"
}