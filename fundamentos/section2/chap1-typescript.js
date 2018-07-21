// npm install -g typescript
// para compilar typescript
// tsc archivo.ts
// tsc --
var saludo = 'hola Sergio';
console.log(saludo);
// variables
var x = 3;
var s = 'Hola';
var a;
var sergio = {
    name: 'Sergio',
    age: 30,
    date: '29/18/2016'
};
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.add = function (user) {
        this.users.push(user);
    };
    return Student;
}());
var s1 = new Student();
var jhoel = {
    name: 'Johel',
    age: 20,
    date: '10/08/1992'
};
s1.add(jhoel);
s1.add(jhoel);
