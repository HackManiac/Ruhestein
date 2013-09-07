/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var utils = {

    cap: function(value, min, max) {
        var result;
        if (value < min) {
            result = min;
        } else if (value > max) {
            result = max;
        } else {
            result = value;
        }
        return result;
    },

    variablify: function(input) {
        if (!input) {
            return input;
        }

        var tmp = input.replace(/[\s]/g, '');
        return tmp.substring(0, 1).toLowerCase() + tmp.substring(1);
    }
    
};



module.exports = utils;
