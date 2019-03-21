
class Person {
    firstname:string;
    lastname:string; 
    twitterAccount?:string;   

    constructor(){
        this.firstname = "Ser";
        this.lastname = "8A";
        this.twitterAccount = "@gnujavasergio";
    }

    setLastname(lastname:string):void{    
        this.lastname = lastname;
    }
}

var myPerson = new Person();
myPerson.setLastname("Ochoa");
myPerson.firstname = "Sergio"

console.log(myPerson);

