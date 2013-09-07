/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (5) Assassinate; Destroy an enemy minion.

var Assassinate568 = {

    getDescription: function() {
        return this.formatDescription('Destroy an enemy minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Assassinate568"');
    },

};



exports.Assassinate568 = Assassinate568;
