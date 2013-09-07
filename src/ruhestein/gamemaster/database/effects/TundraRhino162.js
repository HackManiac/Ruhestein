/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 2/5 Tundra Rhino; Your Beasts have Charge.

var TundraRhino162 = {

    getDescription: function() {
        return this.formatDescription('Your Beasts have Charge.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TundraRhino162"');
    },

};



exports.TundraRhino162 = TundraRhino162;
