// public, private and  protected

class Company{
    public id:number;
    protected name: string;
    private email:string;
    
    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }

    getEmail():string{
        return this.email;
    }

    setEmail(email:string):void{
        this.email = email;
        console.log(`Email set:- ${this.email}`)
    }
}

class  Employees extends Company{
    constructor(id:number,name:string){
        super(id,name);
    }
}

let employees = new Employees(1,"MOKAN");
employees.setEmail("mokan@gmail.com")
employees.getEmail();