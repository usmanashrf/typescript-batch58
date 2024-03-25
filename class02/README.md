# Using Inquirer in Typescript

Inquirer is a powerful library for creating command-line interfaces in Node.js. This Markdown file serves as a guide to using Inquirer in Typescript to prompt users for input.

## Installation

Before using Inquirer, ensure you have Node.js installed. Then, install Inquirer using npm:
Run Following 3 Commands in your project deirectory

```bash
tsc --init
npm install inquirer
npm i @types/node -D
npm i @types/inquirer -D
```


## How to use inquirer in code to take input from user
```typescript
import inquirer from "inquirer";

let Name = await inquirer.prompt([{
    name: "name",
    message: "Enter your name?",
    type: "input",
  }]);
  
  console.log("Hello, " + Name.name + "!");

```
### Some Important Points To Avoid Errors:

1. In your `tsconfig.json` file, on line `14` change `"target": es2016` to `"target": es2022`

2. In your `tsconfig.json` file, on line `28`. change `"module": "commonjs"` to `"module": "NodeNext"`

3. In your `tsconfig.json` file, on line `30` . set `"moduleResolution": "node10"` to `"moduleResolution": "NodeNext",` and remain uncomment

4. In your `package.json` file, Add Following code` :
    
    `"type": "module",`
    
    
