/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 1/1 Edwin VanCleef; Stealth. Combo: Gain +2/+2 for each other card played this turn.

var EdwinVanCleef3 = {

    getDescription: function() {
        return this.formatDescription('Stealth. Combo: Gain +2/+2 for each other card played this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "EdwinVanCleef3"');
    },

};



exports.EdwinVanCleef3 = EdwinVanCleef3;
