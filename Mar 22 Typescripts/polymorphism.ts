class Animal{
    public name: string;
    constructor(name: string){
        this.name=name;
    }

    public makeSound():void{
       console.log("Animal sound from Animal super class"); 
    }
}

class Cat extends Animal{
    public makeSound(): void {
        console.log("Cat sound")
    }
}

class Dog extends Animal{
    public makeSound(): void {
        console.log("Dog sound")
    }
}

let cat = new Cat("Cat");
cat.makeSound();

let dog = new Dog("Dog");
dog.makeSound();