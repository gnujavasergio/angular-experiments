console.log("hola mundo");
// Datos primitivas
var fullname = "Sergio Ochoa";
var age = 31;
var developer = true;
// Arrays
var skills = ['JavaScript', 'Typescript', 'Angular'];
var numbers = [1, 2, 3];
// Enum
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Developer"] = 3] = "Developer";
})(Role || (Role = {}));
var role = Role.Employee;
console.log('Role' + role);
// Functions
function setName(name) {
    this.fullname = name;
}
function getWelcome(text) {
    return 'Welcome' + text;
}
function inConsole(nameFunction) {
    console.log(nameFunction);
}
inConsole(getWelcome("Sergio"));
inConsole(fullname);
inConsole('Love typescript');
var data = ['Angularjs', 'Angular', 'Reacjs'];
data.forEach(function (framework) {
    inConsole(framework);
});
