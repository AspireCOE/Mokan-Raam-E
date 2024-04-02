// Named fuction -------------------------------------------------------------------------------
function Fun(){
    console.log("Fun");
}
Fun();

// anonymous function ---------------------------------------------------------------------------
var add = function(x, y) {
    return x + y;
};
console.log(add(1,2));

// creating function with arrow function ---------------------------------------------------------------------------
const addarrow = (x, y) => {
    return x + y;
};
// const add = (x, y) => x + y;
console.log(addarrow(1,2));

// IIFE-Immediately Invoke Function Expression ---------------------------------------------------------------------------

(()=> {
    // Code within this function is executed immediately
    var x = 10;
    console.log(x); // Output: 10
})();

// Call back function 1 ---------------------------------------------------------------------------
function fetchData(callback) {
    setTimeout(function() {
        const data = 'Some data retrieved from the server';
        callback(data);
    }, 1000);
}

// Define a callback function
function processData(data) {
    console.log('Data received:', data);
}

// Pass the callback function to fetchData
fetchData(processData);


// function constructor ---------------------------------------------------------------------------
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating instances of Person objects using the constructor
const person1 = new Person('Mokan', 22);
const person2 = new Person('Raam', 21);

console.log(person1.name); // Output: Alice
console.log(person2.age);  // Output: 25

let fun = new Function(console.log(1+2));

fun();

// For-in loop --------------------------------------------------------------------------

const object = {a: 1, b: 2, c: 3};
for (const key in object) {
    console.log(key, object[key]);
}

// For-of loop --------------------------------------------------------------------------

const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);
}

// forEach loop --------------------------------------------------------------------------

const arrayforeach = [1, 2, 3, 4, 5];
arrayforeach.forEach((element) => {
    console.log(element);
});

// OOPS concepts:---------------------------------------------------------------------------
// oop concept
let Employee={
    name:"Mokan Raam",
    age:20,
    location:{
        district:"Trichy",
        state:"Tamil Nadu"
    },
    fun : function(){
        let info= `This is ${this.name} from ${this.location.district}`;
        console.log(info);
    }
};

Employee.fun();

//Factory function ---------------------------------------------------------------------------
function pizza(size){
    return{
        fun() {
            let s=`This is ${this.size} pizza`;
            console.log(s);
        }
    };
}
let temp = pizza("small size");
temp.fun();

// map in JS ---------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter in JS ---------------------------------------------------------------------------

const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce in JS ---------------------------------------------------------------------------

const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15