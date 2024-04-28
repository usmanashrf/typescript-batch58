// import {y,b} from "./first.js"
import {b as mynumber} from "./second.js"

import h from "./first.js"
console.log(h)

//scope

// 1- var  ------ global
// 2- let  ------ local
// 3- const ----- local



if(true){
    //body
    let myName = "Ahmed"
    var age = 25;
    const city = "cairo";

    console.log(myName);

    myName = "Ali";

    // we can't assign new values to const
    city = "Giza";


    console.log(age)
    //use
    console.log(city)

}

console.log(myName);

console.log(age)

console.log(city)

let greeting = "Hello"
function hello(){
    //body
    // let greeting = "Hello"
     console.log(greeting)
     
}

 console.log(greeting)

// // ==============================




// console.log(a)


// =========================================================


// Union Literals
let myAge: number | string;
myAge = "25";

if(typeof myAge === "string"){
    myAge.toLowerCase()
}

if(typeof myAge === "number"){
    let subAge = myAge / 2
}



let phoneNumber: number | string | boolean;

phoneNumber = 92312349876
phoneNumber = "+92312349876"
phoneNumber = "0312349876"

let myname: "Muzhar" | "Ahmed" | "Zia";

myname = "Zia";
myname = "Ali";
console.log(myname);


//type alias
type MyName = "Muzhar" | "Ahmed" | "Zia" | number;

let firstName: MyName = "Zia"


