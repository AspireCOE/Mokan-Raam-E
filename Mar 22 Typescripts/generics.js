var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    Box.prototype.setValue = function (newValue) {
        this.value = newValue;
    };
    return Box;
}());
// Usage
var numberBox = new Box(10);
console.log(numberBox.getValue()); // Output: 10
numberBox.setValue(20);
console.log(numberBox.getValue()); // Output: 20
var stringBox = new Box("Hello");
console.log(stringBox.getValue()); // Output: "Hello"
stringBox.setValue("Goodbye");
console.log(stringBox.getValue()); // Output: "Goodbye"
// A generic function to return the first element of an array
function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
var numbers = [1, 2, 3, 4];
var firstNumber = getFirstElement(numbers);
var names = ["Alice", "Bob", "Charlie"];
var firstName = getFirstElement(names);
