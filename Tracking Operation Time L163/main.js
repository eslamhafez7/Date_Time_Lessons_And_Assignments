/*
    [Tracking Operations Time] L163

    Search {
        performance.now()
        performance.mark()
    }
*/

let spoint = new Date();

for (let i = 0; i < 1000; i++) {
    document.write(i);
}

let epoint = new Date();

let duration = spoint - epoint;
console.log(duration);

let start = performance.now();

for (let i = 0; i < 10000; i++) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(`Hello I'm div ${i + 1}`));
    document.body.appendChild(div);
}

let end = performance.now();
let Duration = end - start;
console.log(Duration);



performance.mark("start");

for (let i = 0; i < 20; i++) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(`Hello, I'm div ${i + 1}`));
    document.body.appendChild(div);
}

performance.mark("end");
performance.measure("duration", "start", "end");

const measure = performance.getEntriesByName("duration")[0];
console.log(measure.duration);