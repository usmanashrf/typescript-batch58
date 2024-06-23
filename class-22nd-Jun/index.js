"use strict";
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(meters) {
        alert(this.name + " moved " + meters + "m.");
    }
}
var a = new Animal("cat").name;
console.log(a);
