
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(newValue: T): void {
        this.value = newValue;
    }
}

// Usage
const numberBox = new Box<number>(10);
console.log(numberBox.getValue()); // Output: 10
numberBox.setValue(20);
console.log(numberBox.getValue()); // Output: 20

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // Output: "Hello"
stringBox.setValue("Goodbye");
console.log(stringBox.getValue()); // Output: "Goodbye"


// A generic function to return the first element of an array
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

const numbers = [1, 2, 3, 4];
const firstNumber: number | undefined = getFirstElement(numbers);

const names = ["Alice", "Bob", "Charlie"];
const firstName: string | undefined = getFirstElement(names);