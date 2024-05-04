let person= "sachin";

let persons={
    name:"Ahmed",
    age:23,
    address:{
        street:"abc",
        city:"isb",
        country:"PAK"
    }
}

// console.log(persons)

// console.log(persons.age)

console.log(persons.address["city"])



// Type Declaration
let students : {
    name: string,
    age: number,
    "roll no": number,
    uniform?:string
}

students = {
    name: "Hira",
    age: 30,
    "roll no": 1
}

// student['age'] = 20

// student.age = 22

// student['roll no'] = 433424

// console.log(student["roll no"])

// student.uniform = "white" // error


// Aliased Object Type
type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: "Hira",
    age: 30
}

let person1 : Student ={
    name: "Ahmed",
    age: 23
}



// Interfaces

interface Manager {
    name: string,
    subordiates?: number
}

let storeManager: Manager = {
    name: "Bilal"
}


// ================================

// interface employee{
//     name: string,
//     age: number
// }

// interface person{
//     name: string,
//     age: number,
//     address: string
// }

// anonymous typing
// let myType:{name:string, id:number, age?:number} = { name: "Zia", id: 1 }; // duck typing

// myType.age = 34


// type alias
type MyType = {name:string, id:number, age?:number}

let myType:MyType = { name: "Zia", id: 1 }; // duck typing

myType.age = 34



interface MyType2 {
    name: string;
    age:number | "N/A";
}

let myType2: MyType2 = {
    name: "ALi",
    age: 22
}
// =========================
interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}

let ball1 : Ball ={
    diameter: 10
}

let sphere1 : Sphere = {
    diameter: 20
}

interface tube{
    diameter: number
    length?: number
}

let tube1: tube = {
    diameter: 10,
    length: 20
}

ball1 = sphere1
sphere1 = ball1

// tube1 = ball1 //not equal  // diameter , length 
// ball1 = tube1  //diamerer  both are equal 

tube1 = ball1
ball1 = tube1

// ================================


let myType = { name: "Zia", id: 1 };

myType = { id: 2,  name: "Tom" };

myType = { id: 2,  name_person: "Tom" };


let x: { id: number, [abc: string]: any };

x = { id: 1, name: "Zia" };
x={id:10, name_person:"Tom"}

x={id:12,age:20}
// ==========================


let myType2 = { id: 2,  name: "Tom" };

let myType3 = { id: 2,  name_person: "Tom" };

//myType = myType3


var myType4 = { id: 2,  name: "Tom", age: 22 };


 myType = {id:2, name:"Tom", age:22} //fresh object



 //myType4                       =     myType
 //{id:2, name:"Tom", age:22}    = {id:2, name:"Tom"}

 myType4 = myType

myType = myType4; //stale object myType4


var x1: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
var y = { id: 1, fullname: "Zia" };
x1 = y;