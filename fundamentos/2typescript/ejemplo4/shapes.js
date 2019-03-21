var Person = /** @class */ (function () {
    function Person() {
        this.firstname = "Ser";
        this.lastname = "8A";
        this.twitterAccount = "@gnujavasergio";
    }
    Person.prototype.setLastname = function (lastname) {
        this.lastname = lastname;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.setLastname("Ochoa");
myPerson.firstname = "Sergio";
console.log(myPerson);
