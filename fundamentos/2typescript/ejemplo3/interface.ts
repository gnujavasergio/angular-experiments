interface IPerson {
    firstname:string;
    lastname:string; 
    twitterAccount?:string;   
}

let person1:IPerson = {
    firstname:'Sergio',
    lastname: 'Ochoa',
    twitterAccount: '@gnujavasergio'
}

let person2:IPerson = {
    firstname:'Julio',
    lastname: 'Silva'
}

console.log(person1);
console.log(person2);
