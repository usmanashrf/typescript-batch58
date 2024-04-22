let num1 = 5;
let num2 = 3;

let results = num1 + num2;

console.log(results)

function add(num1:number, num2:number){
    let result = num1 + num2;
    return result
}

add(1, 2)

let result = add(5,3);
let result1 = add(5,4);
let result2 = add(5,6);


console.log(result)
console.log(result1)
console.log(result2)




function printMyName(){   // Simple function
    console.log("Muzhar Hussain");
}

printMyName();


function getTime(): String{
    return "05:15"
}

let time = getTime()

console.log(time)

function getFullTime(hours: number, minutes?: number){  // Optional parameters

    if(hours != 0){
        return `00:${minutes}`;
    }

    if(!minutes){
        return `${hours}:00`;
    }
    return `${hours}:${minutes}`;
}

console.log(getFullTime(5))
console.log(getFullTime(0,30))
console.log(getFullTime(5,30))

let fullTime = getFullTime(5,30)

fullTime = '90'


let fullTime2 = (hours:number, minutes?:number) => {
    if(hours != 0){
        return `00:${minutes}`;
    }

    if(!minutes){
        return `${hours}:00`;
    }
    return `${hours}:${minutes}`;
}


console.log(fullTime2(2,30))


let fullTime3 = () => 30 // expression

// =========================


function addNum(a:number, b:number){
    return a + b;
}
// Arrow functuons

let addNum1 = (a:number, b:number) =>{
    return a + b;
}

let addNum2 = (a:number, b:number) =>   a + b;


let number1 = 34;
let number2 = 45;
let number3 = 12;
                // 0   1    2
let numberArray = [34, 45, 12];

console.log(numberArray[0])  // 34
console.log(numberArray[1])  // 45
console.log(numberArray[2])  // 12


console.log(numberArray)

numberArray[0] = 35;

console.log(numberArray)


let typedArray:number[] = [number1, number2, number3]



let numberArray1 = [34, 45, 12];

numberArray1.pop()

console.log(numberArray1)

numberArray1.push(23)

console.log(numberArray1)


let stringArray : string[] = ['Muzhar', 'Hussain', 'Hussain']

stringArray.unshift('Ali')

let firstName = stringArray.shift()

console.log(firstName)

              // 0          1         2         3
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 1, "Lemon", "Kiwi"); 

console.log(fruits)


const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1.slice(1,3); // [Orange,Lemon,Apple,Mango]

console.log(citrus)

for (let i = 0; i < fruits1.length; i++) {
    console.log(fruits1[i]);
}  

console.log(fruits1.join(', '));



var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

for (var i = 0; i <= 4; i++) {
  if ("Islamabad" === cleanestCities[i]) {
    console.log("It's one of the cleanest cities");

    break;
  }
}


var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
    
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}

console.log(fullNames)
