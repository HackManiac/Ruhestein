/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 3/6 Fen Creeper; Taunt

var FenCreeper476 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FenCreeper476"');
    },

};



exports.FenCreeper476 = FenCreeper476;
