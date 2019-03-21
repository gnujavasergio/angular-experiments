console.log("hola mundo")

// Datos primitivas
var fullname:string = "Sergio Ochoa";
var age:number = 31;
var developer:boolean = true;

// Arrays
var skills:Array<string> = ['JavaScript', 'Typescript','Angular'];
var numbers:number[] = [1,2,3];

// Enum
enum Role {
    Employee, Manager, Admin, Developer
}
var role:Role = Role.Employee;
console.log('Role' + role);

// Functions
function setName(name:string):void{
    this.fullname = name;
}

function getWelcome(text:string):string{
    return 'Welcome' + text;
}

function inConsole(nameFunction:any):void{
    console.log(nameFunction);    
}

inConsole(getWelcome("Sergio"));
inConsole(fullname);
inConsole('Love typescript');

var data:string[] = ['Angularjs','Angular','Reacjs'];
data.forEach((framework)=>{
    inConsole(framework);
});



