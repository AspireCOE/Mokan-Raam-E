// optionalParamter ---------------------------------------------

let optionalParamter = (name: string, age: number, email?:string) => {
    if(email !== undefined){
        console.log(name+"-----"+ age.toString()+"-----"+email)
    }
    else{
        console.log(name+"-----"+ age.toString());
    }
}

optionalParamter("mokan",21);

optionalParamter("mokan",21,"m@mgmail.com");

// defaultParamter ---------------------------------------------

let defaultParamter = (name: string, age: number, email:string = "defaultmail@gmail.com") => {

    console.log(name+"-----"+ age.toString()+"-----"+email)

}

defaultParamter("mokan",21);

defaultParamter("mokan",21,"m@mgmail.com");

// restParamter --------------------------------------------------

let restParamter = (a: number, ...b: number[]): number => {

    let sum : number =a;
    for(let i=0;i<b.length;i++){
        sum+=b[i];
    }
    return sum;
}

console.log(restParamter(1,2,3,4,5,6,7,8,9,10));

// functionOverloading ---------------------------------------------------

function getAdd(a:string,b:string);
function getAdd(a:number,b:number);
function getAdd(a:any,b:any){
    return a+b;
}

console.log(getAdd("11","22"));
console.log(getAdd(11,22));