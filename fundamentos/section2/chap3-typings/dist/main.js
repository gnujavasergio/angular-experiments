"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../typings/globals/jquery/index.d.ts" />
const $ = __importStar(require("jquery"));
class Interaction {
    constructor() {
        $('#btn').click(function () {
            console.log('Click me');
            $(this).css('color', 'red');
        });
    }
}
//# sourceMappingURL=main.js.map