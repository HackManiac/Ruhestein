/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 3/2 Mad Bomber; Battlecry: Deal 3 damage randomly split between all other characters.

var MadBomber80 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 3 damage randomly split between all other characters.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MadBomber80"');
    },

};



exports.MadBomber80 = MadBomber80;
