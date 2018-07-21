import './iuser'

class User {
    private name : string;
    private age : number;

 constructor (name: string, age: number){
     this.name = name;
     this.age = age;
     console.log(this.name);
 }

 toString(){
     console.log(`Hola ${this.name} tu tienes ${this.age}`);
 }
}

const u = new User('Sergio',30);
u.toString();