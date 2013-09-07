/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Chicken552 = {

    getDescription: function() {
        return this.formatDescription('Hey Chicken!');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Chicken552"');
    },

};



exports.Chicken552 = Chicken552;
