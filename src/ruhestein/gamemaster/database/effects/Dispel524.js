/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Dispel; Silence a minion.

var Dispel524 = {

    getDescription: function() {
        return this.formatDescription('Silence a minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Dispel524"');
    },

};



exports.Dispel524 = Dispel524;
