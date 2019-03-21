var People = /** @class */ (function () {
    // ? indica que es opcional
    function People(firsname, lastname) {
        console.log(firsname, lastname);
        this.firstname = firsname;
        this.lastname = lastname;
    }
    People.prototype.getWelcome = function () {
        var emoji = ':)';
        return " Saludos:\n        " + this.firstname + " " + this.lastname + emoji;
    };
    return People;
}());
var anonimo = new People();
var object1 = new People("Sergio");
var object2 = new People("Jhoel", "Ochoa");
console.log(object2.getWelcome());
