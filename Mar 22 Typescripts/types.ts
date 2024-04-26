// Build in data types
        // number 
        // string
        // boolean
        // null 
        // undefined
        // void

// User define datatypes
        // class 
        // interface
        // array
        // tuple 
        // enums
        // function


// Type Annotation -----------------------

let mystring : string;
mystring = "Hello";

let myval : string = `Typescript`;

let mynum : number = 25;

const PIE : number = 3.14;

let value;  // Variable 'value' implicitly has an 'any' type

// Function parameter type annotation
function greet(name: string): string {
    return "Hello, " + name;
}

console.log(greet(myval));

function add(x: number, y: number): number {
    return x + y;
}

let result: number = add(3, 5);
console.log("Result:", result);

// Type Inference ----------------------------

let y = 20;

let names = "Dylan";

let response = true;


// Type Assertion

let count : number = 10;

let mynames : string = "myname";

mynames = <number>count;

mynames = count as number;

// Unable to Infer --------------------------

const json = JSON.parse("55");

console.log(typeof json); 

// Error In Type Assignment ------------------

let first: string = "mokan";
first = 159;

let second = "mokan";
second = 765;