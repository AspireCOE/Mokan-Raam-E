type person = {
    company:string,
    role:string,
    year_of_service:number
}

abstract class Person{
    abstract year : number;
    name:string;

    constructor(name:string){
        this.name = name;
    }
    display():void{
        console.log(this.name);
    }

    abstract find(string): person;
}

class Employee extends Person{
    year:number;
    code:number;

    constructor(name:string,code:number,year:number){
        super(name);
        this.code = code;
        this.year = year;
    }

    find(name:string):person{
        console.log("Person found");
        return {
            company:"Aspire Systems",
            role:"Software Engineer",
            year_of_service:1
        }
    }
}

let employee = new Employee("Mokan",90,1);

employee.display();
employee.find("Mokan")