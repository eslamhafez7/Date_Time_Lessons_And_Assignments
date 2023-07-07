// import eslam, {a, arr, saymsg} from "./main.js"

// console.log(a);
// console.log(arr);
// console.log(saymsg());
// console.log(eslam());

import * as all from "./main.js"

console.log(all);
console.log(all.a)
console.log(all.arr);
console.log(all.saymsg());
// console.log(all.msg()); // error
console.log(all.default());

/*
you can use [import * as] syntax to import all exports from the module into a single object. However,
the default export will not be accessible directly using this syntax. Instead, you can access
it as a property of the imported object.
*/