var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log("id is" + this.id);
        console.log("name is" + this.name);
    };
    return Student;
}());
var obj = new Student(1, "Mokan");
var obj2 = new Student(2, "anitha");
obj.display();
console.log(obj2.id);
// Arrays ------------------------------------------------------------------------------------------------------
var names = [];
names.push("Dylan");
var names1 = ["Dylan"];
names.push("Jack"); // give error
var products = ["apple", "mango", "orange"];
for (var i = 0; i < products.length; i++) {
    console.log(products[i]);
}
var salary = [12, 13, 14, 12, 15];
var TotalSalary = 0;
function totalSalary(salary) {
    for (var i = 0; i < salary.length; i++) {
        TotalSalary = TotalSalary + salary[i];
    }
    console.log(TotalSalary);
}
totalSalary(salary);
// Tuples ------------------------------------------------------------------------------------------------------
// Typed Arrays
var ourTuple;
ourTuple = [5, false, 'Coding God was here'];
var ourTuple;
ourTuple = [false, 'Coding God was mistaken', 5]; //throws an error
// Readonly Tuple
var ourTuple1;
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');
console.log(ourTuple1); // We have no type safety in our tuple for indexes 3+
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
ourReadonlyTuple.push('Coding God took a day off'); // throws error as it is readonly.
// Object types ------------------------------------------------------------------------------------------------------
var car = {
    type: "Toyota",
    model: "innova",
    year: 2009
};
