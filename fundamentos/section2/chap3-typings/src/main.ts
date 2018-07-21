/// <reference path="../typings/globals/jquery/index.d.ts" />
import * as $ from 'jquery';

class Interaction {

    constructor(){
        $('#btn').click(function(){
            console.log('Click me');
            $(this).css('color','red');
        });
    }
}
