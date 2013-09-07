/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var BloodsailRaider637 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Gain Attack equal to the Attack of your weapon.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BloodsailRaider637"');
    },

};



exports.BloodsailRaider637 = BloodsailRaider637;
