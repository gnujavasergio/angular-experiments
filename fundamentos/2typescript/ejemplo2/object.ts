class People {
    firstname:string;
    lastname:string;

    // ? indica que es opcional
    constructor(firsname?:string, lastname?:string){
        console.log(firsname, lastname);        
        this.firstname = firsname;
        this.lastname = lastname;
    }

    getWelcome():string{
        let emoji = ':)';
        return ` Saludos:
        ${this.firstname} ${this.lastname}` + emoji;
    }
    
}

let anonimo = new People();
let object1 = new People("Sergio");
let object2 = new People("Jhoel","Ochoa");
console.log(object2.getWelcome());
