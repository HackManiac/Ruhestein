/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 2/2 Treant; Charge.  At the end of the turn, destroy this minion.

var Treant337 = {

    getDescription: function() {
        return this.formatDescription('Charge.  At the end of the turn, destroy this minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Treant337"');
    },

};



exports.Treant337 = Treant337;
