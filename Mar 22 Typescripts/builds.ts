enum Color {
    Red,
    Green,
    Blue
}

let myColor: Color = Color.Red;


class Car{
    color:String;

    constructor(color:string){
        this.color = color;
    }

    show(): void{
        console.log("color is: "+this.color);
    }
}

let car = new Car("blue");
car.show();

class Benz extends Car{
    price : number;

    constructor(color:string ,price:number){
        super(color)
        this.price = price
    }

    display(): void{
        console.log("color is :"+this.color);
        console.log("price is :"+this.price);
    }
}

let benz = new Benz("blue",100000);
benz.display();

class Bmw extends Benz{
    variant : string;

    constructor(color:string ,price:number, variant:string){
        super(color,price)
        this.price = price
    }

    display(): void{
        console.log("color is :"+this.color);
        console.log("price is :"+this.price);
        console.log("variant is :"+this.variant);
    }
}

let bmw = new Bmw("blue",100000,"SX100");
bmw.display();