/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (0) 1/1 Chicken; Hey Chicken!

var Chicken552 = {

    getDescription: function() {
        return this.formatDescription('Hey Chicken!');
    },

    cast: function() {
        // nop
    },

};



exports.Chicken552 = Chicken552;
