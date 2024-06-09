"use strict";
class Human {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is a Human and is eating");
    }
}
let stduent = new Human("Ali");
// console.log("Name of student",stduent.name);
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is a Animal and is eating");
    }
}
class WildAnimal {
    constructor(title) {
        this.title = title;
    }
    eat() {
        console.log(this.title + " is a Wild Animal and is eating");
    }
}
class Robot {
    constructor(name) {
        this.name = name;
    }
}
// let h: Human = new Human("Tom");
let a = new Animal("Goat");
let r = new Robot("R2-D2");
class Car {
    constructor(color, model, brand, modelYear) {
        this.color = color;
        this.model = model;
        this.brand = brand;
        this.modelYear = modelYear;
    }
    start() {
        console.log(this.brand + " ignited");
    }
    setBrand(name) {
        this.brand = name;
    }
    getBrand() {
        return this.brand;
    }
}
let mycar = new Car("white", "civic", "honda", 2010);
mycar.setBrand("hello");
console.log("mycar : ", mycar.getBrand());
let yourcar = new Car("black", "Toyota", "corola", 2022);
console.log("yourcar : ", yourcar.start());
