class Student{

    id: number;
    name: string;

    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }

    display():void{
        console.log("id is"+this.id);
        console.log("name is"+this.name);
    }
}

let obj = new Student(1,"Mokan");
let obj2 = new Student(2,"anitha");

obj.display();
console.log(obj2.id);

// Arrays ------------------------------------------------------------------------------------------------------

const names: string[] = [];
names.push("Dylan");

const names1: readonly string[] = ["Dylan"];
names.push("Jack");  // give error

let products:Array<string>=["apple","mango","orange"];
for(let i=0;i<products.length;i++){
    console.log(products[i]);
}

let salary:Array<number>=[12,13,14,12,15];
let TotalSalary=0;

function totalSalary(salary){
    for(let i=0;i<salary.length;i++){
        TotalSalary=TotalSalary+salary[i];
    }
    console.log(TotalSalary);
}

totalSalary(salary);


// Tuples ------------------------------------------------------------------------------------------------------

// Typed Arrays
let ourTuple: [number, boolean, string];

ourTuple = [5, false, 'Coding God was here'];

let ourTuple: [number, boolean, string];

ourTuple = [false, 'Coding God was mistaken', 5]; //throws an error

// Readonly Tuple

let ourTuple1: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');
console.log(ourTuple1); // We have no type safety in our tuple for indexes 3+

const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

ourReadonlyTuple.push('Coding God took a day off'); // throws error as it is readonly.


// Object types ------------------------------------------------------------------------------------------------------

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "innova",
    year: 2009
};