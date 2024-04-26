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
var mystring;
mystring = "Hello";
var myval = "Typescript";
var mynum = 25;
var PIE = 3.14;
var value; // Variable 'value' implicitly has an 'any' type
// Function parameter type annotation
function greet(name) {
    return "Hello, " + name;
}
console.log(greet(myval));
function add(x, y) {
    return x + y;
}
var result = add(3, 5);
console.log("Result:", result);
// Type Inference ----------------------------
var y = 20;
var names = "Dylan";
var response = true;
// Type Assertion
var count = 10;
var mynames = "myname";
mynames = count;
mynames = count;
// Unable to Infer --------------------------
var json = JSON.parse("55");
console.log(typeof json);
// Error In Type Assignment ------------------
var first = "mokan";
first = 159;
var second = "mokan";
second = 765;
