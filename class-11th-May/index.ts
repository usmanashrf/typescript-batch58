type Author = {
    firstName: string;
    "Last Name": string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Zia",
        "Last Name": "Khan"
    },
    name: "My Best Book"
}

console.log(myBook.author.firstName);
myBook.author["Last Name"];
myBook.author["firstName"]


// ============================== Intersection Types ==============================



interface Student {
    student_Id: number;
    name: string;
  }
    
interface Teacher {
    teacher_Id: number;
    teacher_name: string;
}
    
type intersected_type = Student & Teacher ;   
    
type union_type = Student | Teacher;

let obj1: intersected_type = {
    student_Id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
    

console.log(obj1.teacher_Id);
console.log(obj1.name);

// ============================

let myval: any;

myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK


//Unknown

let value: unknown;

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK


// Assigning a value of type unknown to variables of other types

let val: unknown;

const val1: unknown = val; // OK
const val2: any = val; // OK
const val3: boolean = val; // Will throw error
const val4: number = val; // Will throw error
const val5: string = val; // Will throw error
const val6: Record<string, any> = val; // Will throw error
const val7: any[] = val; // Will throw error
const val8: (...args: any[]) => void = val; // Will throw error




// Never

// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
  }
   
  // Inferred return type is never
  function fail() {
    return error("Something failed");
  }
   
  // Function returning never must not have a reachable end point
  function infiniteLoop(): never {
    while (true) {}
  }


  // =========================== explicit typecasting =============================

let myname: unknown = "Zia";

console.log((myname as string).length);

console.log((<string> myname).length)

let mystring = `${1234567890}`;

let mystring2 = "" + 1234567890;

let mynumber = parseInt("43443434")

let mynumber2 = +"76775765675"
