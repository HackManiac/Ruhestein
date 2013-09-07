/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/3 Bloodsail Raider; Battlecry: Gain Attack equal to the Attack of your weapon.

var BloodsailRaider637 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Gain Attack equal to the Attack of your weapon.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BloodsailRaider637"');
    },

};



exports.BloodsailRaider637 = BloodsailRaider637;
