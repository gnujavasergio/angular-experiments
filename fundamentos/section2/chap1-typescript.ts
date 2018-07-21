// npm install -g typescript
// para compilar typescript
// tsc archivo.ts
// tsc --
let saludo = 'hola Sergio';
console.log(saludo);

// variables
let x : number = 3;
let s : string = 'Hola';
let a : any [];

interface User {
    name: string,
    age: number,
    date : string
}

let sergio: User = {
    name: 'Sergio',
    age: 30,
    date: '29/18/2016'
}

class Student {
    users : User[];

    add(user: User){
        this.users.push(user);
    }
}

const s1 = new Student();

let jhoel: User = {
    name: 'Johel',
    age: 20,
    date: '10/08/1992'
}
s1.add(jhoel);
s1.add(jhoel);
