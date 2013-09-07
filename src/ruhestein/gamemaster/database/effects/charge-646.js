/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Charge; Give a friendly minion Charge.

var Charge646 = {

    getDescription: function() {
        return this.formatDescription('Give a friendly minion Charge.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Charge646"');
    },

};



exports.Charge646 = Charge646;
