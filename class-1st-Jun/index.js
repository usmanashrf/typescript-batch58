"use strict";
console.log("First statement");
setTimeout(() => {
    console.log("Second statement");
}, 2000);
setTimeout(() => {
    console.log("Third statement");
}, 1000);
console.log("Last statement");
