/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MadBomber80 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 3 damage randomly split between all other characters.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MadBomber80"');
    },

};



exports.MadBomber80 = MadBomber80;
