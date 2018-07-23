"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../typings/globals/jquery/index.d.ts" />
var $ = require("jquery");
var Interaction = /** @class */ (function () {
    function Interaction() {
        $('#btn').click(function () {
            console.log('Click me');
            $(this).css('color', 'red');
        });
    }
    return Interaction;
}());
new Interaction();
//# sourceMappingURL=main.js.map