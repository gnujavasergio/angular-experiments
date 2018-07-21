"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./iuser");
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(this.name);
    }
    toString() {
        console.log(`Hola ${this.name} tu tienes ${this.age}`);
    }
}
const u = new User('Sergio', 30);
u.toString();
//# sourceMappingURL=main.js.map